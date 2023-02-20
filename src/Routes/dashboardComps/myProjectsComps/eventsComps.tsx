import { Box, Center, Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import moment from "moment";

export const EventsComps = (props: {title: string, date: string, time: string, type: string}) => {
  return (
    <Flex  mt='10px' w='100%' h='fit-content' flexDirection={'column'} padding='20px' borderRadius={'md'} border='1px solid rgba(229, 235, 244, 1)'>
      <Text fontSize={'14px'} fontWeight='extrabold'>{props.title}</Text>
      <Flex>
        <Flex flexDirection={'column'} w='100%' >
          <Text fontSize={'13px'}>{props.date === 'anytime'?moment(Date.now()).format('lll'):props.date}</Text>
        
        </Flex>
        <Spacer />
        <Flex>
          <EventTag bg="rgba(254, 245, 239, 1)" color="rgba(237, 112, 45, 1)" tag={props.type} />
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
