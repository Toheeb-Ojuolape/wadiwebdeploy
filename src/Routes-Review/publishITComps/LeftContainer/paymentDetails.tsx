import { Box, Text } from "@chakra-ui/react";
import { ProjectDetailsButton } from "./projectDetailsButton";

export const PaymentDetails = (props: any) => {
  return (
    <Box flexWrap="wrap" padding={'20px'}>
      <Text fontWeight={"extrabold"} fontSize="18px">
        Payment Details
      </Text>
      <Text fontSize={"14px"}>
        Lorem ipsum dolor sit amet consectetur. Duis purus adipiscing amet nisi
        nibh ac nisi pretium laoreet. Odio arcu dolor consequat vitae et
        porttitor aliquet nec. Morbi justo aliquam sit in lectus ac vitae enim
        a. Turpis nullam sodales turpis feugiat vestibulum felis faucibus nulla.
        Dolor senectus consectetur leo elementum non ultrices.
      </Text>
      <ProjectDetailsButton onClick={props.onClick} text={"Make payment"} />
    </Box>
  );
};
