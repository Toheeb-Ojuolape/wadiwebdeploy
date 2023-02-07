import { Flex, Box, Text, Spacer, Button } from "@chakra-ui/react";
import { GoBackto } from "../goBackto";
import { PasswordInput } from "../passwordInput";

export const ChangePassword = (props: any) => {
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
          size={"sm"}
          bg="rgba(43, 95, 208, 1)"
          variant={"outline"}
          borderColor="rgba(43, 95, 208, 1)"
          color="white"
        >
          Change
        </Button>
      </Box>
    </Flex>
  );
};
