import { Flex } from "@chakra-ui/react";
import logo from "./logo.webp";

export const LogoComp = () => {
  return (
    <Flex justify={"center"}>
      <img src={logo} width="200px" alt="Logo" />
    </Flex>
  );
};
