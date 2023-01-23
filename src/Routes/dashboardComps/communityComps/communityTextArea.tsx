import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import PaperClip from "./paperClipIcon";

export const CommunityTextArea = (props: any) => {
  return (
    <Flex flexDirection={"column"} mt="20px">
      <Box borderRadius="lg" border={'1px solid rgba(229, 235, 244, 1)'} padding={"20px"}>
        {" "}
        <Input
         name= 'title'
          placeholder="Title"
          resize={"none"}
          onChange={props.handleQuestions}
          value={props.value.title}
          border="0 "
          mb={"20px"}
          bg="white"
        />
        <Textarea
        name ='body'
          bg={"white"}
          border={"0"}
          placeholder="Type your Questions here"
          resize={"none"}
          onChange={props.handleQuestions}
          value={props.value.body}
        />
      </Box>
      <Flex mt="20px">
        <Spacer />
        <HStack>
          {/* <PaperClip  /> */}

          <Button
            color={"white"}
            borderRadius="full"
            bg="rgba(43, 95, 208, 1)"
            onClick={props.submitQuestion}
          >
            Send
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};
