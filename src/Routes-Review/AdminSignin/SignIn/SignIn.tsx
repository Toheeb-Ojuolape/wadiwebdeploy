import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../../ReviewerComps/header/logoComp";
import { OnBoardingContainer } from "../components/onBoardContainer/onBoardContainer";



export const AdminSignIn = () => {
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
