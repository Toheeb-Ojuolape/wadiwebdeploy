import {
  
  Flex,
  Text,
  Box,
  Spacer,
  Radio,
} from "@chakra-ui/react";


export const ModalBodyComps = (props: {
  icon: any;
  title: string;
  subtitle: string;
  value: string;
  bg: string;

}) => {
  return (
    <Flex
      padding="10px"
      border={"1px solid rgba(234, 236, 240, 1) "}
      borderRadius="lg"
      mb="10px"
    >
      <Box
        padding="10px"
        borderRadius={"full"}
        bg={props.bg}
        h="fit-content"
        mr="20px"
      >
        {/* <Briefcase size={"20px"} color="rgba(43, 95, 208, 1)" /> */}
        {props.icon}
      </Box>
      <Flex flexDirection={"column"}>
        <Text fontWeight={"bolder"}>{props.title}</Text>
        <Text fontWeight={"light"} fontSize="13px" color={"#667085"}>
          {props.subtitle}
        </Text>
      </Flex>
      <Spacer />
      <Radio value={props.value}></Radio>
    </Flex>
  );
};
