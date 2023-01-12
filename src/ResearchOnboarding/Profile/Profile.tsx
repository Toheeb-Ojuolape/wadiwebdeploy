import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const Profile = (props: any) => {
  return (
    <>
    <LogoComp />
    <Center className="flex items-center justify-center">
      <OnBoardingContainer
        heading="Let's get to know you"
     
        page="profile"
      />
    </Center></>
  );
};
