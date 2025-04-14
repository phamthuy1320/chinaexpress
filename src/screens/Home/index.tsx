import React from "react";
import { useHome } from "./hooks";
import { Loading } from "../../components/Loading";
import { Box } from "@chakra-ui/react";

const HomeComponent = (props: ReturnType<typeof useHome>) => {
  const { data, isLoading } = props;

  if (isLoading) return <Loading />;
  return <Box></Box>;
};

export const Home = () => {
  return <HomeComponent {...useHome()} />;
};
