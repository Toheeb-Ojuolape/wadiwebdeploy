import { Button, useMediaQuery } from "@chakra-ui/react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import moment from "moment";
import { db } from "../../../../db";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";

export const MakePayment = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  const [loading, setLoading] = useState(false);

  if (!process.env.REACT_APP_FLUTTERWAVE_KEY) {
    throw new Error("set your flutterwave pub key");
  }

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
    tx_ref: moment(Date.now()).format("lll"),
    amount: props.amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: props.user.email,
      phone_number: "08121172330",
      name: props.user.firstName,
    },
    customizations: {
      title: "Wadi",
      description: "Payment for items in cart",
      logo: "https://firebasestorage.googleapis.com/v0/b/wadi-api.appspot.com/o/logoblue.2a25aaadccdfd228e9a8.webp?alt=media&token=d8129f83-d1e3-4cc7-90cf-4be1134db807",
    },
  };


  const handlePayment = () =>{
    setLoading(true);
    document.getElementById("flutterwave")?.querySelector("button")?.click();
    setTimeout(() => setLoading(false), 2000);
  }

  const updateProject = () => {
    setLoading(true);
    const docRef = doc(db, "projects", props.slug);
    updateDoc(docRef, {
      step: 3,
      progress:"50"
    })
      .then(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Payment successful",
          text: "Your project has been moved to the review. This step typically takes 14 days to complete",
          confirmButtonColor:"#2b5fd0"
        }).then(() => {
          window.location.reload();
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Payment unsuccessful",
          text: "We couldn't comfirm your payment at this time",
          confirmButtonColor:"#2b5fd0"
        });
      });
  };

  const fwConfig = {
    ...config,
    text: "Make Payment",
    callback: (response: any) => {
      console.log(response);
      if (response.status === "successful") {
        //change the step of the project to next step
        updateProject();
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("payment closed");
    },
  };

  return (
    <div>
      <Button
        fontSize="sm"
        variant="brand"
        fontWeight="500"
        w={!isMobile ? "400px" : "100%"}
        h="50"
        mt="20px"
        mb="24px"
        bg={"rgba(43, 95, 208, 1)"}
        color="white"
        fontFamily={""}
        _hover={{
          bg: "white",
          color: "rgba(43, 95, 208, 1)",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        }}
        isLoading={loading}
        onClick={handlePayment}
      >
        Make Payment
      </Button>

      <div style={{ display: "none" }} id="flutterwave">
        <FlutterWaveButton {...fwConfig} />
      </div>
    </div>
  );
};
