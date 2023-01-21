import { Box, Center, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

export const EventsComps = (props: {event: string, date: string, time: string, tag: string}) => {
  return (
    <Flex mt='10px' w='100%' h='fit-content' flexDirection={'column'} padding='20px' borderRadius={'md'} border='1px solid rgba(229, 235, 244, 1)'>
      <Text fontSize={'14px'} fontWeight='extrabold'>{props.event}</Text>
      <Flex>
        <Flex flexDirection={'column'} w='100%' >
          <Text fontSize={'13px'}>{props.date}</Text>
          <Text fontSize={'13px'}>{props.time}</Text>
        </Flex>
        <Spacer />
        <Flex>
          <EventTag bg="rgba(254, 245, 239, 1)" color="rgba(237, 112, 45, 1)" tag="Webinar" />
        </Flex>
      </Flex>
    </Flex>
  );
};

const EventTag = (props: any) => {
  return (
    <Center h='fit-content' bg={props.bg} padding="6px" borderRadius={'md'}>
      <Text lineHeight={'12px'} fontSize='12px' color={props.color}>{props.tag}</Text>
    </Center>
  );
};
