import { Button, useMediaQuery } from "@chakra-ui/react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import moment from "moment";
import { db } from "../../../../db";
import {doc,updateDoc} from "firebase/firestore"
import {useState} from "react"
import Swal from "sweetalert2";

export const MakePayment = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  const [loading,setLoading] = useState(false)

  const config = {
    public_key: "FLWPUBK-213ca97a288c0e26a38121855659ad4b-X",
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

  const updateProject = () =>{
    setLoading(true)
    const docRef = doc(db,"projects",props.slug)
    updateDoc(docRef,{
        step:3
    }).then(()=>{
        setLoading(false)
        Swal.fire({
            icon:"success",
            title:"Payment successful",
            text:"Your project has been moved to the review. This step typically takes 14 days to complete"
          }).then(()=>{
            window.location.reload()
          })
        
    }).catch(()=>{
      Swal.fire({
        icon:"error",
        title:"Payment unsuccessful",
        text:"We couldn't comfirm your payment at this time"
      })
    })
  } 

  const fwConfig = {
    ...config,
    text: "Make Payment",
    callback: (response: any) => {
      console.log(response);
      if(response.status === 'completed'){
        //change the step of the project to next step
        updateProject()
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("payment closed");
    },
  };

  return (
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
    >
      <FlutterWaveButton {...fwConfig} />
    </Button>
  );
};
