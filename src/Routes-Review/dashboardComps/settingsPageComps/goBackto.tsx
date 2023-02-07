import { Box, HStack, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const GoBackto = (props: {name:string}) => {
  const navigate = useNavigate();
  return (
    <HStack
      spacing="24px"
      justify={"center"}
      onClick={() => navigate(-1)}
      className="cursor-pointer hover:underline"
    >
      <Box w="fit-content" h="fit-content">
        <ArrowBackIcon />
      </Box>
      <Box w="fit-content" h="fit-content">
        <Text fontWeight={"bold"}>{props.name}</Text>
      </Box>
    </HStack>
  );
};
