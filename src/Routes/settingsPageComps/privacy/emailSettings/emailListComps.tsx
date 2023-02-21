import { Box, FormControl, FormLabel, HStack, Switch, Text, useMediaQuery } from "@chakra-ui/react";

export const EmailListComps = (props: { id: string; title: string }) => {
const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <FormControl display="flex" alignItems="center">
      <HStack>
      <Box w={!isMobile ? '400px': 'fit-content'}>  <FormLabel htmlFor={props.id} mb="2" mr="50px">
         <Text fontWeight={'light'}> {props.title}</Text>
        </FormLabel></Box>
        <Box>
        <Switch id={props.id} /></Box>
      </HStack>
      
    </FormControl>
  );
};
