import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../src/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "../src/components/Layout";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
