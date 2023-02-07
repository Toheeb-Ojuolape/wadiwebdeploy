import {
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

import { MdRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

export const PasswordInput = (props: {
  name: string;
  label: string;
  mb: string;
  handleChange: any;
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  return (
    <>
      <FormLabel
        marginBottom={"0px"}
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        display="flex"
      >
        {props.label}
        <Text color={brandStars}></Text>
      </FormLabel>
      <InputGroup size="md">
        <Input
          name={props.name}
          isRequired={true}
          fontSize="sm"
          border={"1px solid rgba(101, 108, 117, 0.37)"}
          placeholder="Password"
          mb={props.mb}
          type={show ? "text" : "password"}
          variant="auth"
          onChange={props.handleChange}
          // _active={{ bg: "rgba(101, 108, 117, 0.37)" }}
        />
        <InputRightElement display="flex" alignItems="center">
          <Icon
            color={textColorSecondary}
            _hover={{ cursor: "pointer" }}
            as={show ? RiEyeCloseLine : MdRemoveRedEye}
            onClick={handleClick}
          />
        </InputRightElement>
      </InputGroup>
    </>
  );
};
