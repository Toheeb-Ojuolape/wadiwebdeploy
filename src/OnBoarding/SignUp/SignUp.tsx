import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const SignUP = () => {
  return (
    <>
    <LogoComp />
    <Center className="flex  items-center justify-center">
      <OnBoardingContainer
        heading="Create account"
        subheading="Access our research resources and community"
        page="register"
      />
    </Center>
  </>
  );
};
