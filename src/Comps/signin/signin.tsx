import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactEventHandler, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { emptyLogin, Login } from "../../Interface/LoginInterface";
import { AccountOption } from "../buttons/accountOption";
import { GoogleButton } from "../buttons/googleButton";
import { WadiButton } from "../buttons/wadiButton";
import { EmailInput } from "../input/emailInput";
import { PasswordInput } from "../input/passwordInput";

export const SignInComp = (props: any) => {
  document.title = 'Login | Wadi'
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState<Login>(emptyLogin);
  const handleClick = () => setShow(!show);
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };

  const brandStars = useColorModeValue("brand.500", "brand.400");

  return (
    <FormControl>
      <EmailInput handleChange={handleChange} value={login.email} />
      <PasswordInput handleChange={handleChange} value={login.password} />

      <Flex justifyContent="flex-end" mb="24px">
        <Link to={"/forgot-password"}>
          <Text fontSize={"16px"} color={"rgba(43, 95, 208, 1)"}>
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
