import React from "react";
import { Box, Button, Card, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useAdmin } from "./hooks";

export interface IAdminProps {}

const AdminComponent = (props: ReturnType<typeof useAdmin>) => {
  const { show, onShow, onLogin } = props;
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Card backgroundColor={"#fff"} padding={"10px"} width={"500px"} gap={"10px"} as={"form"} onSubmit={onLogin}>
        <Text fontSize={"24px"} textAlign={"center"}>
          Login
        </Text>
        <Box>
          <Text>Password: </Text>
          <InputGroup>
            <Input type={show ? "password" : "text"} />
            <InputRightElement onClick={onShow} _hover={{ cursor: "pointer" }}>
              {show ? <EyeIcon height={"24px"} /> : <EyeSlashIcon height={"24px"} />}
            </InputRightElement>
          </InputGroup>
        </Box>
        <Flex justifyContent={"center"}>
          <Button width={"200px"} borderRadius={"25px"} type={"submit"}>
            Login
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};

export const Admin = () => {
  return <AdminComponent {...useAdmin()} />;
};
