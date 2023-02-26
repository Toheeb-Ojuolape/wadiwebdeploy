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
import Swal from "sweetalert2";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import slugify from "slugify";
import { auth } from "../../firebase-auth";
import { db } from "../../db";
import { doc, getDoc, setDoc } from "firebase/firestore";
import moment from "moment";
import { useNavigate } from "react-router-dom";


export const SignUpComp = (props: any) => {
  document.title = "Register | Wadi";
  const history = useNavigate();
  const [register, setRegister] = useState<Register>(emptyRegister);
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<Boolean>(false);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegister({ ...register, [name]: value });
  };

  async function checkUserName(docRef: any): Promise<boolean> {
    const response = await getDoc(docRef);
    const documentSnapshot: any = response;
    if (documentSnapshot._document != null) {
      Swal.fire({
        title: "Username already taken",
        text: "This name has already been taken. Please use another one",
        icon: "error",
        confirmButtonColor: "#2b5fd0",
        confirmButtonText: "Okay",
      });
      setLoading(false);
      return true;
    }
    return false;
  }

  const createUserAccount = async (docRef: any, slug: string) => {
    createUserWithEmailAndPassword(auth, register.email, register.password)
      .then(async (data) => {
        console.log(data);
        const currentUser: any = auth.currentUser;
        const isEmailSent = await sendEmailVerification(currentUser);
        console.log(isEmailSent);
        let userData = {
          firstName: register.fullName.split(" ")[0],
          lastName: register.fullName.split(" ")[1],
          email: register.email,
          phoneNumber: "",
          image: "",
          reports: [],
          research: [],
          messages: [],
          projects: [],
          purchases: [],
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
          title: "",
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
                history("/onboarding/profile");
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
      lower: true
    });
    const docRef: any = doc(db, "users", slug);
    //first check if username exist
    let checkUserExist: Promise<boolean> = checkUserName(docRef);
    let isUserExist = await checkUserExist;

    //then create account with username and password if user does not exist
    console.log(isUserExist);
    if (!isUserExist) {
      await createUserAccount(docRef, slug);
    }
  };

  //create account with google signup
  const addToDatabase = async (e:any) => {
    const slug = slugify(e.displayName, {
      replacement: "-",
      remove: /[$*_+~.()'"!?\-:@]/g,
      lower: true,
    });
    const docRef = doc(db, "users", slug);

    let checkUserExist: Promise<boolean> = checkUserName(docRef);
    let isUserExist = await checkUserExist;
    if (isUserExist) {
      setGoogleLoading(false);
      return;
    }
    let userData = {
      firstName: e.displayName?.split(" ")[0],
      lastName: e.displayName?.split(" ")[1],
      email: e.email,
      phoneNumber: e.phoneNumber,
      image: e.photoURL,
      reports: [],
      research: [],
      projects: [],
      purchases: [],
      messages: [],
      forum: [],
      notifications: [
        {
          title: "Welcome to Wadi!",
          message:
            "Congratulations, You have successfully created an account on Wadi",
          timestamp: moment(Date.now()).format("LLL"),
        },
      ],
      uid: e.uid,
      title: "",
      photoURL: e.photoURL,
    };
    setDoc(docRef, {
      firstName: e.displayName?.split(" ")[0],
      lastName: e.displayName?.split(" ")[1],
      email: e.email,
      phoneNumber: e.phoneNumber,
      image: e.photoURL,
      reports: [],
      research: [],
      projects: [],
      purchases: [],
      messages: [],
      forum: [],
      notifications: [
        {
          title: "Welcome to Wadi!",
          message:
            "Congratulations, You have successfully created an account on Wadi",
          timestamp: moment(Date.now()).format("LLL"),
        },
      ],
      uid: e.uid,
      title: "",
      photoURL: e.photoURL,
    })
      .then(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("wadiKey", slug);
        Swal.fire({
          title: "Registration Successful!",
          text: "You have successfully created an account on Wadi",
          icon: "success",
          confirmButtonColor: "#2b5fd0",
          confirmButtonText: "Ok",
        }).then((response) => {
          console.log(response);
          setGoogleLoading(false);
          history("/onboarding/profile");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Something went wrong!",
          text: "Please try again by refreshing the page. Sorry for the incoveniences 😥",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const googleSignup = () => {
    setGoogleLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(token);
      console.log(result.user);
      const firebaseUser:any = result.user
      addToDatabase(firebaseUser);
    });
  };

  return (
    <FormControl>
      <FullNameInput handleChange={handleChange} value={register.fullName} />
      <EmailInput handleChange={handleChange} value={register.email} />
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
      <WadiButton loading={isLoading} onClick={handleClick} text="Sign up" />
      <GoogleButton onClick={googleSignup} isLoading={googleLoading} />
      <AccountOption
        text="Already have an account?"
        linkText="Login here"
        link="/login"
      />
    </FormControl>
  );
};
