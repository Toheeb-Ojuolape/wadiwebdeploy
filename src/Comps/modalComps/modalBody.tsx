import { Flex, Text, Box, RadioGroup } from "@chakra-ui/react";
import { AddSquare, Briefcase, Drop, MessageMinus } from "iconsax-react";
import { ModalBodyComps } from "./modalBodyCompsRadio";

export const ModalBodyComponent = (props: any) => {
  return (
    <Flex flexDirection={"column"} mt="20px">
      <Box
        padding={"10px"}
        borderRadius="full"
        mb="15px"
        bg="rgba(242, 249, 253, 1)"
        w="fit-content"
      >
        <AddSquare size="20px" />
      </Box>
      <Box mb="20px">
        <Text fontWeight={"bolder"} fontSize="20px">
          What do you want to do?
        </Text>
        <Text fontWeight={"light"} color="#667085" fontSize={"14px"}>
          Select any of the options below
        </Text>
      </Box>
      <RadioGroup defaultValue="1" onChange={props.setRadio}>
        <ModalBodyComps

          title="A new Project"
          subtitle="Upload a draft of your research article"
          bg="rgba(242, 249, 253, 1)"
          icon={<Briefcase size={"20px"} color="rgba(43, 95, 208, 1)" />}
          value="1"
        />{" "}
        <ModalBodyComps
        
          title="SendSample"
          subtitle="Send a lab sample for analysis"
          bg="rgba(254, 245, 239, 1)"
          icon={<Drop size={"20px"} color="rgba(237, 112, 45, 1)" />}
          value="2"
        />{" "}
        <ModalBodyComps
      
          title="A question on the Forum"
          subtitle="Ask questions related to your research"
          bg="rgba(209, 250, 223, 1)"
          icon={<MessageMinus size={"20px"} color="rgba(18, 183, 106, 1)" />}
          value="3"
        />
      </RadioGroup>
    </Flex>
  );
};
