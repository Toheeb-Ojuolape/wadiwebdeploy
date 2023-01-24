import { Box, HStack, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const GoBack = (props: any) => {
  return (
    <HStack
      spacing="24px"
      justify={"center"}
      onClick={props.goBack}
      className="cursor-pointer hover:underline"
    >
      <Box w="fit-content" h="fit-content">
        <ArrowBackIcon />
      </Box>
      <Box w="fit-content" h="fit-content">
        <Text fontWeight={"bold"}>Back</Text>
      </Box>
    </HStack>
  );
};
