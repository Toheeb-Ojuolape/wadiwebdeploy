import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const FOF = () => {
  return (
    <>
      <LogoComp />
      <Center className="flex  items-center justify-center">
        <OnBoardingContainer
          heading="404"
          subheading="The Page you're looking for doesn't exist"
          page="404"
        />
      </Center>
    </>
  );
};
