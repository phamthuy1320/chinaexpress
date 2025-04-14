import { Grid, GridItem } from "@chakra-ui/react";
import { ILayoutProps } from "./types";
import { Header } from "../Header";
import { Footer } from "../Footer";
import React from "react";

export const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <Grid templateRows={"60px 1fr 200px"} height={"100vh"}>
      <GridItem>
        <Header />
      </GridItem>
      <GridItem padding={10} height={"100%"}>
        {children}
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};
