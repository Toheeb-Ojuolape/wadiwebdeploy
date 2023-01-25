import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes";

import { SignIn } from "./OnBoarding/SignIn/SignIn";
import { Navigate, Route, Routes } from "react-router-dom";
import { FP } from "./OnBoarding/ForgotPassword/FP";
import { SignUP } from "./OnBoarding/SignUp/SignUp";
import { VerifyEmail } from "./OnBoarding/VerifyEmail/VerifyEmail";
import { SNP } from "./OnBoarding/SetNewPassword/SNP";
import { Profile } from "./ResearchOnboarding/Profile/Profile";
import { Background } from "./ResearchOnboarding/Background/Background";
import { YourStory } from "./ResearchOnboarding/YourStory/YourStory";
import { Achieve } from "./ResearchOnboarding/Achieve/Achieve";
import { DashBoard } from "./Dashboard/Dashboard";
import { FOF } from "./Routes/404/404";

export const App = () => (
  <div>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="forgot-password" element={<FP />} />
        <Route path="register" element={<SignUP />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="new-password" element={<SNP />} />
        <Route path="/onboarding/profile" element={<Profile />} />
        <Route path="/onboarding/background" element={<Background />} />
        <Route path="/onboarding/story" element={<YourStory />} />
        <Route path="/onboarding/achieve" element={<Achieve />} />

        <Route
          path="/dashboard/:route"
          element={<DashBoard loggedIn={true} />}
        />
        <Route
          path="/dashboard/publish/:subroute"
          element={<DashBoard loggedIn={true} />}
        />
        <Route path="/404" element={<FOF />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route
          path="/dashboard"
          element={<Navigate to="/dashboard/home" replace />}
        />
        <Route path="/" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </ChakraProvider>
  </div>
);
