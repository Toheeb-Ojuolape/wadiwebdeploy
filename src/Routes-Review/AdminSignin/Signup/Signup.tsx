import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../../ReviewerComps/header/logoComp";
import { OnBoardingContainer } from "../components/onBoardContainer/onBoardContainer";



export const AdminSignUp = () => {
  return (
    <>
      <LogoComp />
      <Center className="flex  items-center justify-center">
        <OnBoardingContainer
          heading="Welcome Reviewer!"
          subheading="We are excited to have you here"
          page="register"
        />
      </Center>
    </>
  );
};
