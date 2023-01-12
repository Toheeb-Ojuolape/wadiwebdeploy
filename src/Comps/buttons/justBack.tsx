import { Box, HStack, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

export const JustBack = (props: any) => {
  const navigate = useNavigate();
  return (
    <HStack spacing="24px" justify={"center"} onClick={() => navigate(-1)} className='cursor-pointer hover:underline' >
      <Box w="fit-content" h="fit-content">
        <ArrowBackIcon />
      </Box>
      <Box w="fit-content" h="fit-content">
        <Text fontWeight={"bold"}>Back</Text>
      </Box>
    </HStack>
  );
};
