import { Flex } from "@chakra-ui/react";
import logo from "./logo.webp";

export const LogoComp = () => {
  return (
    <Flex justify={"center"}>
      <img src={logo} width="110px" alt="Logo" />
    </Flex>
  );
};
