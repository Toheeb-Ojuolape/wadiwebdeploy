import { Flex, FormControl, Text } from "@chakra-ui/react";
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

import { Link } from "react-router-dom";
import { emptyRegister, Register } from "../../Interface/RegisterInterface";
import { AccountOption } from "../buttons/accountOption";
import { GoogleButton } from "../buttons/googleButton";
import { WadiButton } from "../buttons/wadiButton";
import { EmailInput } from "../input/emailInput";
import { FullNameInput } from "../input/fullNameInput";
import { PasswordInput } from "../input/passwordInput";

export const SignUpComp = (props: any) => {
  document.title = "Register | Wadi";
  const [register, setRegister] = useState<Register>(emptyRegister);
  const [isLoading,setLoading] = useState<Boolean>(false)

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegister({ ...register, [name]: value });
    console.log(register);
  };

  const handleClick = (e:any) =>{
    setLoading(true)
    if(register.fullName ==='' || register.email === '' || register.password === ''){
      alert("You need to enter all your details")
      return
    }
    alert(register)
  }

  return (
    <FormControl>
      <FullNameInput handleChange={handleChange} value={register.fullName} />
      <EmailInput handleChange={handleChange} value={register.email} />
      <PasswordInput handleChange={handleChange} value={register.password} />
      <PasswordStrengthBar password={register.password} />

      <Flex mb="24px">
     
          <Text fontSize={"14px"} color={"black"} >
            I agree to abide by Wadi's{" "}
            <Link to="/" className="underline hover:text-green-400">
              Terms of Service
            </Link>{" "}
            and its{" "}
            <Link to="/" className="underline hover:text-green-400">
              Privacy Policy
            </Link>
          </Text>
      
      </Flex>
      <WadiButton isLoading={isLoading} onClick={handleClick} text="Sign up" />
      <GoogleButton />
      <AccountOption
        text="Already have an account ?"
        linkText="Login here"
        link="/signin"
      />
    </FormControl>
  );
};
