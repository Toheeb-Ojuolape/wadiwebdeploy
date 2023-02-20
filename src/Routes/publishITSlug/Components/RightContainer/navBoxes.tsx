import { Box, Center, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

export const NavBoxes = (props: any) => {
  return (
    <Box
      w="100%"
      h="fit-content"
      
      pt="10px"
      pb="10px"
      pl="10px"
      _hover={{ backgroundColor: "#F8F8F8" }}
      cursor="pointer"
    >
      <HStack>
        <Box mr={"10px"}>{props.icon}</Box>
        <Flex flexDirection={"column"}>
          <Text fontSize={"14px"} fontWeight={"bolder"} lineHeight="16px">
            {props.title}
          </Text>{" "}
          <Text lineHeight="16px" color="#64748B" fontSize={"12px"}>
            {props.subtitle}
          </Text>
        </Flex>
<Box w='20px'></Box>
<Spacer/>
        <Box _hover={{ display: "block" }}>
          <Center
            bg="rgba(43, 95, 208, 1)"
            borderRadius={"10px 0px 0px 10px"}
            w="4px"
            height="30px"
          ></Center>
        </Box>
      </HStack>
    </Box>
  );
};

/* <Box
          position={"absolute"}
          right={0}
          display={props.isActive ? "block" : "block"}
          _hover={{ display: "block" }}
          mr="10px"
        >
          <Center
            bg="rgba(43, 95, 208, 1)"
            borderRadius={"10px 0px 0px 10px"}
            w="8px"
            height="20px"
          ></Center>
        </Box> */
