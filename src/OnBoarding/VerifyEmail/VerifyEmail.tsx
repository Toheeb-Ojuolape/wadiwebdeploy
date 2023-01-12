import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { LogoComp } from "../../Comps/header/logoComp";
import { OnBoardingContainer } from "../../Comps/OnBoardContainer";

export const VerifyEmail = (props: any) => {
    const [cookies, setCookie, removeCookie] = useCookies(['email']);
    setCookie('email','example@gmail.com')
  

  return (

    <>
    
      <LogoComp />
      <Center className="flex  items-center justify-center">
        <OnBoardingContainer
          heading="Verify your email"
          subheading={`To keep a trusted and safe community, we’ve sent an email to ${cookies.email}  for verification, and you’ll only do this once.`}
          page="verify-email"
        />
      </Center>
    </>
  );
};
