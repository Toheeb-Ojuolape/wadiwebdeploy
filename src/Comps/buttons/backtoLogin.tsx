import { Box, HStack, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const BackToLogin = (props: any) => {
  return (
    <Link to={'/login'}>
    <HStack spacing="24px" justify={"center"}>
      <Box w="fit-content" h="fit-content">
        <ArrowBackIcon />
      </Box>
      <Box w="fit-content" h="fit-content">
        <Text fontWeight={"bold"}>Back To Login</Text>
      </Box>
    </HStack></Link>
  );
};
