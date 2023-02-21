import { Avatar, Box, Button, Flex, HStack, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { GoBackto } from "../goBackto";

export const LoginHome = (props: { name: string; profession: string; onClick?: any; pic:string }) => {
 const [isMobile] = useMediaQuery("(max-width: 700px)");
    return (
    <Flex flexDirection={"column"} className="animate__animated animate__fadeIn">
        <Box mb='30px' w='fit-content'><GoBackto name='Login activity'/></Box>
      <HStack mb="10px">
        <Box>
          <Avatar src={props.pic}/>
        </Box>
        <Box>
          <Text fontWeight={'bolder'}>{props.name}</Text>
          <Text fontSize={'sm'} color='rgba(71, 84, 103, 1)'>{props.profession}</Text>
        </Box>
      </HStack>
      <Text>This will log you of of your account</Text>
      <Text color={'rgba(71, 84, 103, 1)'} fontSize='12px' w={!isMobile ? '600px' : "fit-content"}>
        You are about to begin the process of deactivating your account on Wadi.
        The implication of this decision is that your account will no longer
        appear on the platform wadi.africa. You will no longer be able to upload
        or review manuscripts any more.
      </Text>
      <Flex>
        <Spacer/>
        <Button onClick={props.onClick} bg="rgba(240, 68, 56, 1)" color="white">
          Log out
        </Button>
      </Flex>
    </Flex>
  );
};
