import { Flex, FormControl, Text } from "@chakra-ui/react";
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { Link } from "react-router-dom";
import {
  emptyRegister,
  Register,
} from "../../../../Interface/ReviewerRegisterInterface";
import { AccountOption } from "../buttons/accountOption";
import { WadiButton } from "../buttons/wadiButton";
import { EmailInput } from "../input/emailInput";
import { FullNameInput } from "../input/fullNameInput";
import { TitleInput } from "../input/titleInput";
import { SpecializationInput } from "../input/specializationInput";
import { PasswordInput } from "../input/passwordInput";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import slugify from "slugify";
import { auth } from "../../../../firebase-auth";
import { db } from "../../../../db";
import { doc, setDoc } from "firebase/firestore";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export const SignUpComp = (props: any) => {
  document.title = "Register | Wadi";
  const history = useNavigate();
  const [register, setRegister] = useState<Register>(emptyRegister);
  const [isLoading, setLoading] = useState<Boolean>(false);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegister({ ...register, [name]: value });
    console.log(register);
  };

  const createUserAccount = async (docRef: any, slug: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, register.email, register.password)
      .then(async (data) => {
        console.log(data);
        const currentUser: any = auth.currentUser;
        let userData = {
          firstName: register.fullName.split(" ")[0],
          lastName: register.fullName.split(" ")[1],
          email: register.email,
          specialization: register.specialization,
          title: register.title,
          phoneNumber: "",
          image: "",
          transactions: [],
          balance: 0,
          messages: [],
          projects: [],
          forum: [],
          notifications: [
            {
              title: "Welcome to Waid App!",
              message:
                "Congratulations, You have successfully created an account on Wadi",
              timestamp: moment(Date.now()).format("LLL"),
            },
          ],
          uid: currentUser.uid,
          photoURL: "",
        };
        setDoc(docRef, userData)
          .then(() => {
            localStorage.setItem("wadiKey", slug);
            localStorage.setItem("userData", JSON.stringify(userData));
            updateProfile(currentUser, {
              displayName: register.fullName,
              photoURL: "",
            }).then(() => {
              Swal.fire({
                title: "Registration Successful!",
                text: "You have successfully created an account on Wadi",
                icon: "success",
                confirmButtonColor: "#2b5fd0",
                confirmButtonText: "Ok",
              }).then((response) => {
                console.log(response);
                history("/review/home");
                window.location.reload();
              });
              setLoading(false);
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Something went wrong!",
              text: "Please try again by refreshing the page. Sorry for the incoveniences 😥",
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor:"#2b5fd0"
            });
            setLoading(false);
          });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          Swal.fire({
            title: "Registration Invalid",
            text: "This email has already been used by another account",
            icon: "error",
            confirmButtonColor: "#2b5fd0",
            confirmButtonText: "Ok",
          });
          setLoading(false);
        } else if (error.message === "Firebase: Error (auth/invalid-email).") {
          Swal.fire({
            title: "Registration Invalid",
            text: "Password should be at least 6 characters",
            icon: "error",
            confirmButtonColor: "#2b5fd0",
            confirmButtonText: "Ok",
          });
          setLoading(false);
        }
      });
  };

  const handleClick = async (e: any) => {
    setLoading(true);
    if (
      register.fullName === "" ||
      register.email === "" ||
      register.password === ""
    ) {
      setLoading(false);
      Swal.fire({
        icon: "info",
        title: "Hold up!",
        text: "Please enter your all your details",
        confirmButtonColor: "#2b5fd0",
      });
      return;
    }

    const slug: string = slugify(register.fullName, {
      replacement: "-",
      remove: /[$*_+~.()'"!?\-:@]/g,
      lower: true,
    });
    const docRef: any = doc(db, "reviewers", slug);
    await createUserAccount(docRef, slug);
  };

  return (
    <FormControl>
      <FullNameInput handleChange={handleChange} value={register.fullName} />
      <EmailInput handleChange={handleChange} value={register.email} />
      <TitleInput handleChange={handleChange} value={register.title} />
      <SpecializationInput
        handleChange={handleChange}
        value={register.specialization}
      />
      <PasswordInput handleChange={handleChange} value={register.password} />
      <PasswordStrengthBar password={register.password} />
      <Flex mb="24px">
        <Text fontSize={"14px"} color={"black"}>
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
      <AccountOption
        text="Already have an account?"
        linkText="Login here"
        link="/login"
      />
    </FormControl>
  );
};
