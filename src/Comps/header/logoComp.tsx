import { Flex } from "@chakra-ui/react";
import logo from "./logo.webp";
import logoDark from "./logodark.webp";
import logoBlue from "./logoblue.webp";

export const LogoComp = () => {
  return (
    <Flex justify={"center"}>
      <img src={logo} width="110px" className="cursor-pointer" alt="Logo" />
    </Flex>
  );
};

export const LogoCompDark = () => {
  return (
    <Flex justify={"center"}>
      <img src={logoDark} width="70px" className="cursor-pointer" alt="Logo" />
    </Flex>
  );
};

export const LogoCompBlue = () => {
  return (
    <Flex justify={"center"}>
      <img src={logoBlue} width="90px" className="cursor-pointer" alt="Logo" />
    </Flex>
  );
};
