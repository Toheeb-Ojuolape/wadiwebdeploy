import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const Background = (props: any) => {
  return (
    <>
    <LogoComp />
    <Center className="flex items-center justify-center">
      <OnBoardingContainer
        heading="Forgot password"
        subheading="Enter your email to reset your password"
        page="forgot-password"
      />
    </Center></>
  );
};
