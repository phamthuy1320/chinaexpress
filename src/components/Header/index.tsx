import { Flex, Text } from "@chakra-ui/react";
import { Menu } from "../Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex>
      <Menu list={[]} />
      <Text as={Link} href={"/"} _hover={{}}>
        LOGO
      </Text>
    </Flex>
  );
};
