import { Flex } from "@chakra-ui/react";
import logo from "./logo.webp";
import logoDark from './logodark.webp'
import logoBlue from './logoblue.webp'
import { useNavigate } from 'react-router';

export const LogoComp = () => {
  const history = useNavigate()
  return (
    <Flex justify={"center"}>
      <img onClick={()=>history("/")} src={logo} width="110px" className="cursor-pointer" alt="Logo" />
    </Flex>
  );
};

export const LogoCompDark = () => {
  const history = useNavigate()
  return (
    <Flex justify={"center"}>
      <img onClick={()=>history("/")} src={logoDark} width="110px" className="cursor-pointer" alt="Logo" />
    </Flex>
  );
}

export const LogoCompBlue = () => {
  const history = useNavigate()
  return (
    <Flex justify={"center"}>
      <img onClick={()=>history("/")} src={logoBlue} width="90px" className="cursor-pointer" alt="Logo" />
    </Flex>
  );
}