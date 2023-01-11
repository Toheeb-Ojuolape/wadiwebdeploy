import { Flex, FormControl, Text } from "@chakra-ui/react";
import { useState } from "react";

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

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegister({ ...register, [name]: value });
    console.log(register);
  };

  return (
    <FormControl>
      <FullNameInput handleChange={handleChange} value={register.fullName} />
      <EmailInput handleChange={handleChange} value={register.email} />
      <PasswordInput handleChange={handleChange} value={register.password} />

      <Flex mb="24px">
        <Link to={"/forgot-password"}>
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
        </Link>
      </Flex>
      <WadiButton text="Sign up" />
      <GoogleButton />
      <AccountOption
        text="Already have an account ?"
        linkText="Login here"
        link="/signin"
      />
    </FormControl>
  );
};
