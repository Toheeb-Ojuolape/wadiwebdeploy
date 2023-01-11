import { Flex, Heading, Text } from "@chakra-ui/react";
import { FpComp } from "./forgotpassword/fp";
import { SignInComp } from "./signin/signin";
import { SignUpComp } from "./signUp/signup";
import { VerifyEmailComp } from "./verifyEmail/verifyEmail";

export const OnBoardingContainer = (props: any) => {
  return (
    <Flex
      className="content-center text-black rounded-md bg-white w-fit "
      padding={"30px"}
      flexDirection="column"
      width={"500px"}
      margin="20px"
    >
      <div>
        <Heading
          className="text-center "
          fontSize="2em"
          mb="10px"
          fontFamily={"Montserrat"}
        >
          {props.heading}
        </Heading>
        <Text
          mb="36px"
          ms="4px"
          className="text-center"
          fontWeight="400"
          fontSize="md"
          fontFamily={"DM Sans"}
        >
          {props.subheading}
        </Text>
        {props.page === "login" ? <SignInComp /> : null}
        {props.page === "forgot-password" ? <FpComp /> : null}
        {props.page === "register" ? <SignUpComp /> : null}
        {props.page === "verify-email" ? <VerifyEmailComp /> : null}
      

      </div>
    </Flex>
  );
};
