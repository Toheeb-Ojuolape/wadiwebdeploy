import { Box, Text } from "@chakra-ui/layout";
import { Button, Stack } from "@chakra-ui/react";
import success from "../../../../src/assets/success.gif"

export const ManuScriptReady = (props: any) => {
  return (
    <Box padding="20px" textAlign={"center"}>
    <img src={success} alt="success" width={"120px"} style={{margin:"auto"}}/>
    <Text fontSize={"2xl"} fontWeight={"bolder"} mt="30px" mb="20px">
      Manuscript ready 🎉
    </Text>
    <Text>
    Thank you for choosing to use our manuscript review service. Our team of
      experts have successfully reviewed and edited your manuscript to be
      suitable for publication and you can download it using the link below:
    </Text>
    <Stack direction="row" spacing={4} justifyContent="center" mt="30px">
      <Button colorScheme="blue" variant="outline">
        Preview
      </Button>
      <Button bg="rgba(43, 95, 208, 1)" color={"white"} variant="solid">
        Download
      </Button>
    </Stack>
  </Box>
  );
};
