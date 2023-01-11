import { Flex, FormControl, Text } from "@chakra-ui/react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { emptyLogin, Login } from "../../Interface/LoginInterface";
import { AccountOption } from "../buttons/accountOption";
import { GoogleButton } from "../buttons/googleButton";
import { WadiButton } from "../buttons/wadiButton";
import { EmailInput } from "../input/emailInput";
import { PasswordInput } from "../input/passwordInput";

export const SignInComp = (props: any) => {
  document.title = "Login | Wadi";
  const [login, setLogin] = useState<Login>(emptyLogin);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };

  return (
    <FormControl>
      <EmailInput handleChange={handleChange} value={login.email} />
      <PasswordInput handleChange={handleChange} value={login.password} />

      <Flex justifyContent="flex-end" mb="24px">
        <Link to={"/forgot-password"}>
          <Text
            _hover={{ textDecoration: "underline" }}
            fontSize={"16px"}
            color={"rgba(43, 95, 208, 1)"}
          >
            Forgot Password ?
          </Text>
        </Link>
      </Flex>
      <WadiButton text="Login" />
      <GoogleButton />
      <AccountOption
        text="Don’t have an account?"
        linkText="Sign up here"
        link="/register"
      />
    </FormControl>
  );
};
