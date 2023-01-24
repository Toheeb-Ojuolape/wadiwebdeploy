import * as React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import theme from "./themes";

import { SignIn } from "./OnBoarding/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import { FP } from "./OnBoarding/ForgotPassword/FP";
import { SignUP } from "./OnBoarding/SignUp/SignUp";
import { VerifyEmail } from "./OnBoarding/VerifyEmail/VerifyEmail";
import { SNP } from "./OnBoarding/SetNewPassword/SNP";
import { Profile } from "./ResearchOnboarding/Profile/Profile";
import { Background } from "./ResearchOnboarding/Background/Background";
import { YourStory } from "./ResearchOnboarding/YourStory/YourStory";
import { Achieve } from "./ResearchOnboarding/Achieve/Achieve";
import { DashBoard } from "./Dashboard/Dashboard";

export const App = () => (
  <div>
    <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<DashBoard loggedIn={true} />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="forgot-password" element={<FP />} />
      <Route path="register" element={<SignUP/>}/>
      <Route path="verify-email" element={<VerifyEmail/>}/>
      <Route path="new-password" element={<SNP/>}/>
      <Route path="/onboarding/profile" element={<Profile/>}/>
      <Route path="/onboarding/background" element={<Background/>}/>
      <Route path="/onboarding/story" element={<YourStory/>}/>
      <Route path="/onboarding/achieve" element={<Achieve/>}/>
      <Route path="/dashboard/" element={<DashBoard loggedIn={true}/>}/>
      <Route path="/dashboard/:route" element={<DashBoard loggedIn={true}/>}/>
    
   
    </Routes>
    </ChakraProvider>
  </div>
);
