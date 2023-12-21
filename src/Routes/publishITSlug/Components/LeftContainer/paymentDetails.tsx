import { Box, Text } from "@chakra-ui/react";
import { MakePayment } from "./makePayment";

export const PaymentDetails = (props: any) => {
  return (
    <Box flexWrap="wrap" padding={"20px"}>
      <Text fontWeight={"extrabold"} fontSize="18px">
        Payment Details
      </Text>
      <Text fontSize={"14px"}>
        Kindly tap the button below to make a payment of{" "}
        <b>
          NGN{" "}
          {props.project.amount &&
            props.project.amount.toLocaleString("en") + " "}
        </b>
        to enable us proceed with improving your manuscript.
      </Text>
      <MakePayment
        slug={props.project.slug}
        user={props.userData}
        amount={props.project.amount}
        onClick={props.onClick}
        text={"Make payment"}
      />
    </Box>
  );
};
