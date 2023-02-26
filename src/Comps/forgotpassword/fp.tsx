import { useState } from "react";
import { BackToLogin } from "../buttons/backtoLogin";
import { WadiButton } from "../buttons/wadiButton";
import { EmailInput } from "../input/emailInput";
import { auth } from "../../firebase-auth";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";

export const FpComp = () => {
  document.title = "Forgot Password? | Wadi";
  const [Email, setEmail] = useState<string>("");
  const [isLoading, setLoading] = useState<Boolean>(false);
  const handleChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleClick = () => {
    setLoading(true);
    if (Email === "") {
      Swal.fire({
        title: "Request invalid",
        text: "Please enter your email address to proceed",
        icon: "error",
        confirmButtonColor: "#eb3f3f",
        confirmButtonText: "Ok",
      });
      setLoading(false);
      return;
    }
    sendPasswordResetEmail(auth, Email)
      .then(() => {
        Swal.fire({
          title: "Email sent successfully",
          text: "Kindly check your inbox/spam for an email from us",
          icon: "success",
          confirmButtonColor: "#2b5fd0",
          confirmButtonText: "Ok",
        });
        setLoading(false);
      })
      .catch(() => {
        Swal.fire({
          title: "Password not reset",
          text: "This email is not associated with any account on Wadi",
          icon: "error",
          confirmButtonColor: "#2b5fd0",
          confirmButtonText: "Try again",
        });
        setLoading(false);
      });
  };

  return (
    <>
      <EmailInput value={Email} handleChange={handleChange} />
      <WadiButton
        isLoading={isLoading}
        onClick={handleClick}
        text="Reset Email"
      />
      <BackToLogin />
    </>
  );
};
