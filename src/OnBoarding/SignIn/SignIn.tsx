import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const SignIn = () => {
  return (
    <>
      <LogoComp />
      <Center className="flex  items-center justify-center">
        <OnBoardingContainer
          heading="Welcome Back!"
          subheading="We are excited to have you here"
          page="login"
        />
      </Center>
    </>
  );
};
