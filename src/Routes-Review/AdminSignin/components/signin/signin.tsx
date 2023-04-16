import { Flex, FormControl, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { emptyLogin, Login } from "../../../../Interface/LoginInterface";
import { WadiButton } from "../buttons/wadiButton";
import { EmailInput } from "../input/emailInput";
import { PasswordInput } from "../input/passwordInput";
import {
  signInWithEmailAndPassword,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../../firebase-auth";
import slugify from "slugify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../db";

export const SignInComp = (props: any) => {
  document.title = "Login | Wadi";
  const [login, setLogin] = useState<Login>(emptyLogin);
  const [isLoading, setLoading] = useState<Boolean>(false);
  const history = useNavigate();

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };

  const handleLogin = (e: any) => {
    if (login.email === "" || login.password === "") {
      Swal.fire({
        icon: "info",
        title: "Hold up!",
        text: "Please enter your email and password",
        confirmButtonColor: "#2b5fd0",
      });
      return;
    }
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, login.email, login.password)
        .then(async (response: any) => {
          const slug = slugify(response.user.displayName, {
            lower: true,
            replacement: "-",
          });
          try {
            const userData = await (
              await getDoc(doc(db, "reviewers", slug))
            ).data();
            setLoading(false);
            console.log(userData);
            localStorage.setItem("wadiKey", slug);
            localStorage.setItem("userData", JSON.stringify(userData));
            history("/review/home");
          } catch (error) {
            console.log(error);
          }
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Invalid User",
            text: "This user does not have an account on Wadi",
            confirmButtonColor: "#2b5fd0",
          });
          setLoading(false);
        });
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Invalid User",
        text: "This user does not have an account on Wadi",
        confirmButtonColor: "#2b5fd0",
      });
    }
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
      <WadiButton isLoading={isLoading} onClick={handleLogin} text="Login" />
    </FormControl>
  );
};
