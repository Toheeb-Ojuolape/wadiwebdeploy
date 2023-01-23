import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Like, Message2, MessageText, Star } from "iconsax-react";


export const CommunityComps = (props: any) => {
  return (
    <Flex
      w="100%"

      border={"1px solid #E5EBF4"}
      borderRadius="xl"
      padding="15px"
      mb={"15px"}
    >
      <Avatar mr="15px" src={props.pic} />
      <Box>
        <Text fontWeight={"medium"} mb="5px">
          {props.title}
        </Text>
        <Text color={"#475467"} mb="5px">
          {`${props.date} - ${props.user}`}{" "}
        </Text>
        <Text fontSize={"14px"} w="80%">
          {props.post}
        </Text>
        <Flex mt="20px">
          <StarComps likes={props.likes} />
          <CommentComps comments={props.comments} />
        </Flex>
      </Box>
    </Flex>
  );
};

export const StarComps = (props: any) => {
  return (
    <HStack spacing="3px" mb="10px" mr="10px">
      <Like color={"#FFC107"} size="16px" />
      <Text color={"#98A2B3"} fontSize={"12px"} fontWeight={""}>
        {props.likes} likes
      </Text>
    </HStack>
  );
};

export const CommentComps = (props: any) => {
  return (
    <HStack spacing="3px" mb="10px">
      <Message2 color={"#FFC107"} size="16px" />
      <Text color={"#98A2B3"} fontSize={"12px"} fontWeight={""}>
        {props.comments} comments
      </Text>
    </HStack>
  );
};
