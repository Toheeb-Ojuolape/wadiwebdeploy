import { Box, HStack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const JustBack = (props: any) => {

  return (
    <HStack spacing="24px" justify={"center"} onClick={() => window.location.href="/dashboard/home"} className='cursor-pointer hover:underline' >
      <Box w="fit-content" h="fit-content">
        <Text fontWeight={"bold"}>Skip</Text>
      </Box>
      <Box w="fit-content" h="fit-content">
        <ArrowForwardIcon />
      </Box>
    </HStack>
  );
};
