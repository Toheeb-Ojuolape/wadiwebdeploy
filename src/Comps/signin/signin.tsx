import { Flex, FormControl, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { emptyLogin, Login } from "../../Interface/LoginInterface";
import { AccountOption } from "../buttons/accountOption";
import { GoogleButton } from "../buttons/googleButton";
import { WadiButton } from "../buttons/wadiButton";
import { EmailInput } from "../input/emailInput";
import { PasswordInput } from "../input/passwordInput";
import { signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase-auth";
import slugify from "slugify"
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"

export const SignInComp = (props: any) => {
  document.title = "Login | Wadi";
  const [login, setLogin] = useState<Login>(emptyLogin);
  const [isLoading,setLoading] = useState<Boolean>(false)
  const [googleLoading,setGoogleLoading] = useState<Boolean>(false)
  const history = useNavigate()

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };

  const handleLogin = (e:any) =>{
    if(login.email === '' || login.password === ''){
      Swal.fire({
        icon:"info",
        title:"Hold up!",
        text:"Please enter your email and password",
        confirmButtonColor:"#2b5fd0"
      })
      return
    }
    setLoading(true) 
    try{
    signInWithEmailAndPassword(auth,login.email,login.password)
    .then((response:any)=>{
      console.log(response)
      setLoading(false) 
    }).catch(()=>{
      Swal.fire({
        icon:"error",
        title:"Invalid User",
        text:"This user does not have an account on Wadi",
        confirmButtonColor:"#2b5fd0"
      })
      setLoading(false)
    })
    } catch(error:any){
      console.log(error)
      setLoading(false) 
      Swal.fire({
        icon:"error",
        title:"Invalid User",
        text:"This user does not have an account on Wadi",
        confirmButtonColor:"#2b5fd0"
      })
    }
  }


  function googleLogin(){
    setGoogleLoading(true)
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result:any) => {
        const credential:any = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken;
        console.log(token);
        setGoogleLoading(false)
        history("/dashboard")
        window.location.reload()
        const slug = slugify(result.user.displayName,{
          replacement: "-",
          remove: /[$*_+~.()'"!?\-:@]/g,
          lower: true,
         })
        localStorage.setItem("wadiKey",slug)
        setGoogleLoading(false)
      })
      .catch((error) => {
        setGoogleLoading(false)
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.email;
        console.log(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  }

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
      <GoogleButton isLoading={googleLoading} onClick={googleLogin}/>
      <AccountOption
        text="Don’t have an account?"
        linkText="Sign up here"
        link="/register"
      />
    </FormControl>
  );
};
