import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const YourStory = (props: any) => {
  return (
    <>
      <LogoComp />
      <Center className="flex items-center justify-center">
        <OnBoardingContainer heading="Tell us your story" page="story" />
      </Center>
    </>
  );
};
