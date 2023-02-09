import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReviewModalComps } from "./modalComps/modalComps";
import { PasswordInput } from "./passwordInput";

export const DeactivateConfirmPassword = (props: { handleChange: any }) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDirection={"column"}>
      <Box mb="20px">
        <Text mb="20px" color={"rgba(71, 84, 103, 1)"} fontSize="sm">
          Complete your deactivation request by entering the password associated
          with your account
        </Text>
        <Box w={!isMobile ? "300px" : "100%"}>
          <PasswordInput
            name={"cPassword"}
            label={"Confirm your password"}
            mb={"0px"}
            handleChange={props.handleChange}
          />
        </Box>
      </Box>
      <Button
        mt="20px"
        onClick={onOpen}
        size="sm"
        _hover={{ bg: "rgba(240, 68, 56, 0.5)", color: "red" }}
        bg="rgba(240, 68, 56, 1)"
        w={!isMobile ? "200px" : "100%"}
        color="white"
      >
        Deactivate
      </Button>
      <ReviewModalComps
        isOpen={isOpen}
        onClose={onClose}
        title={"Your account has been deactivated"}
        subtitle={"🥹 Sorry to see you go"}
      />
    </Flex>
  );
};
