import { Box, Text } from "@chakra-ui/layout";
import { Button, Stack } from "@chakra-ui/react";

export const ManuScriptReady = (props: any) => {
  return (
    <Box padding="20px">
      <Box width={"100px"} height="100px" border="1px solid black"></Box>
      <Text fontWeight={"bolder"} mt="30px" mb="20px">
        Manuscript ready
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur. Duis purus adipiscing amet nisi
        nibh ac nisi pretium laoreet. Odio arcu dolor consequat vitae et
        porttitor aliquet nec. Morbi justo aliquam sit in lectus ac vitae enim
        a. Turpis nullam sodales turpis feugiat vestibulum felis faucibus nulla.
        Dolor senectus consectetur leo elementum non ultrices.
      </Text>
      <Stack direction="row" spacing={4} align="center" mt="30px">
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
