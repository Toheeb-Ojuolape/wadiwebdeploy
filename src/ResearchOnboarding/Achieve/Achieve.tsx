import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const Achieve = (props: any) => {
  return (
    <>
    <LogoComp />
    <Center className="flex items-center justify-center">
      <OnBoardingContainer
        heading="What do you want to achieve with Wadi?"
        page="achieve"
      />
    </Center></>
  );
};
