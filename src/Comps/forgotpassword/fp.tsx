import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { BackToLogin } from "../buttons/backtoLogin";
import { WadiButton } from "../buttons/wadiButton";
import { EmailInput } from "../input/emailInput";

export const FpComp = (props: any) => {
  const [Email, setEmail] = useState<String>("");
  const handleChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    console.log(Email);
  };
  return (
    <>
      <EmailInput value={Email} handleChange={handleChange} />
      <WadiButton text="Check Email" />
      <BackToLogin/>

   

    </>
  );
};
