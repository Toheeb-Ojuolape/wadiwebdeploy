import { Center } from "@chakra-ui/react";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const SNP = (props: any) => {
  return (
    <>
    <LogoComp />
    <Center className="flex items-center justify-center">
      <OnBoardingContainer
        heading="Set new password"
        subheading="Your new password must be different from previous one"
        page="new-password"
      />
    </Center></>
  );
};
