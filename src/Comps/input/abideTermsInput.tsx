import { Checkbox, HStack, Text } from "@chakra-ui/react";
import { Link} from "react-router-dom";

export const AbideTerms = (props: any) => {
  return (
<HStack spacing="15px" justify={"center"} mb='20px'>
    <Checkbox
      name="tAndC"
      colorScheme="blue"
      onChange={props.handleChange}
      value={props.value}
    />
    <Text fontSize={"13px"}>
    I agree to abide by Wadi's <Link to='#'><span className="underline"> Terms of Service</span></Link> and its{" "}
    <Link to='#'><span className="underline">Privacy Policy</span></Link>
  </Text>
  <div/>
  </HStack>
  );
};
