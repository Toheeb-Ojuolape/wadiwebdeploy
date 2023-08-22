import { useState } from "react";
import {
  emptyVPassord,
  verifyPassord,
} from "../../Interface/PasswordInterface";
import { BackToLogin } from "../buttons/backtoLogin";
import { WadiButton } from "../buttons/wadiButton";
import { PasswordInput } from "../input/passwordInput";
import { VerifyPasswordInput } from "../input/vPasswordInput";
import { Box, Collapse, 
  // Container, Fade, Text 
} from "@chakra-ui/react";
import PasswordStrengthBar from 'react-password-strength-bar';





export const SNPComp = () => {
  document.title = "Login | Wadi";
  const [snp, setSNP] = useState<verifyPassord>(emptyVPassord);
  const [isPassword, setIsPassword] = useState(true);

  

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setSNP({ ...snp, [name]: value });
    if (name === "vPassword") {
        if (value === snp.password) {
          setIsPassword(true);
        } else {
          setIsPassword(false);
        }
      }
      if (name === "password") {
        if (value === snp.vPassword) {
          setIsPassword(true);
        } else {
          setIsPassword(false);
        }
      }
  };

  return (
    <>
      <PasswordInput handleChange={handleChange} />
      <PasswordStrengthBar password={snp.password} />

      <VerifyPasswordInput handleChange={handleChange} />
      <Collapse in={!isPassword}>
        <Box
          p="2px"
          color="white"
          mt="4"
          bg="red"
          
        fontSize={'12px'}
          mb="20px"
          w="fit-content"
        >
          Passwords Don't match*
        </Box>
      </Collapse>
      <div className='pt-5'>
      <WadiButton isLoading={false} onClick={handleChange} text="Check email" /></div>
      <BackToLogin />
    </>
  );
};
