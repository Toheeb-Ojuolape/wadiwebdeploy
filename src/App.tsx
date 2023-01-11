import * as React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import theme from "./themes";

import { SignIn } from "./OnBoarding/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import { FP } from "./OnBoarding/ForgotPassword/FP";
import { SignUP } from "./OnBoarding/SignUp/SignUp";
import { VerifyEmail } from "./OnBoarding/VerifyEmail/VerifyEmail";

export const App = () => (
  <div>
    <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="forgot-password" element={<FP />} />
      <Route path="register" element={<SignUP/>}/>
      <Route path="verify-email" element={<VerifyEmail/>}/>
   
    </Routes>
    </ChakraProvider>
  </div>
);
