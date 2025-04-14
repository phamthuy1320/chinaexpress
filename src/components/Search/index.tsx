import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <InputGroup borderRadius={"25px"} border={"1px solid #e2e8f0"} width={"400px"}>
      <InputLeftElement>
        <FaSearch color={"inherit"} />
      </InputLeftElement>
      <Input
        _hover={{}}
        _active={{}}
        _focusVisible={{ outline: "none", border: "none" }}
        border={"none"}
        backgroundColor={"transparent"}
        type={"search"}
        borderRadius={"inherit"}
      />
    </InputGroup>
  );
};
