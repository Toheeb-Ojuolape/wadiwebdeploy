import { Flex, Heading, Text } from "@chakra-ui/react";
// import { Profile } from "../ResearchOnboarding/Profile/Profile";
// import { YourStory } from "../ResearchOnboarding/YourStory/YourStory";
import { AchieveComp } from "./achieve/achieve";
import { BackgroundComp } from "./background/background";
import { FpComp } from "./forgotpassword/fp";
import { ProfileComp } from "./profile/profile";
import { SNPComp } from "./setnewpassword/setnewpassword";
import { SignInComp } from "./signin/signin";
import { SignUpComp } from "./signUp/signup";
import { VerifyEmailComp } from "./verifyEmail/verifyEmail";
import { IntroComp } from "./yourstory/introduction";

export const OnBoardingContainer = (props: any) => {
  return (
    
    <Flex
      className=" content-center text-black rounded-md bg-white w-fit "
      padding={"30px"}
      flexDirection="column"
      width={"500px"}
      margin="20px"
    >
      <div>
        <Heading
          className="text-center "
          fontSize="2em"
          mb="0px"
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
        {props.page === "new-password" ? <SNPComp /> : null}
        {props.page === "profile" ? <ProfileComp /> : null}
        {props.page === "background" ? <BackgroundComp /> : null}
        {props.page === "story" ? <IntroComp /> : null}
        {props.page === "achieve" ? <AchieveComp /> : null}
      </div>
    </Flex>
  );
};
