import { Flex, Text } from "@chakra-ui/react";
import { Search } from "../Search";
import { Menu } from "../Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex>
      <Menu />
      <Text as={Link} href={"/"} _hover={{}}>
        LOGO
      </Text>
    </Flex>
  );
};
