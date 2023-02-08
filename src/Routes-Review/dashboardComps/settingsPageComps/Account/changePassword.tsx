import {
  Flex,
  Box,
  Text,
  Spacer,
  Button,
  useDisclosure,
  FormControl,
} from "@chakra-ui/react";
import { GoBackto } from "../goBackto";
import { ModalBodyComp } from "../modalComps/modalBody";
import { PasswordModalComps } from "../modalComps/modalComps";
import { PasswordInput } from "../passwordInput";

export const ChangePassword = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      className="animate__animated animate__fadeIn"
      flexDirection={"column"}
      w="100%"
    >
      <Box w="fit-content" mb="30px">
        {" "}
        <GoBackto name="Change Password" />
        <Spacer />
      </Box>

      <Box w="fit-content">
        <FormControl isRequired>
          <PasswordInput
            name={"cPassword"}
            label={"Current password"}
            mb={"40px"}
            handleChange={props.handleChange}
          />
          <PasswordInput
            name={"newPassword"}
            label={"New password"}
            mb={"10px"}
            handleChange={props.handleChange}
          />
          <PasswordInput
            name={"confirmPassword"}
            label={"Confirm password"}
            mb={"20px"}
            handleChange={props.handleChange}
          />
        </FormControl>
      </Box>
      <Box>
        <Button
          variant={"outline"}
          borderColor="rgba(43, 95, 208, 1)"
          color="rgba(43, 95, 208, 1)"
          mr="10px"
          size={"sm"}
        >
          Cancel
        </Button>
        <Button
          onClick={onOpen}
          size={"sm"}
          bg="rgba(43, 95, 208, 1)"
          variant={"outline"}
          borderColor="rgba(43, 95, 208, 1)"
          color="white"
        >
          Change
        </Button>

        <PasswordModalComps isOpen={isOpen} onClose={onClose}  title={"Your password is updated"} subtitle={"You have successfully changed your password. we will log you out in a few seconds, you can use your new password to log back in."}   />
      </Box>
    </Flex>
  );
};
