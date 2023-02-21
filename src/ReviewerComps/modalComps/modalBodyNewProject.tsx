import { Flex, Text, Box, RadioGroup } from "@chakra-ui/react";
import {
  
  BoxAdd,

  DocumentForward,
  DocumentText,
 
} from "iconsax-react";
import { ModalBodyComps } from "./modalBodyCompsRadio";

export const ModelBodyNewProject = (props: any) => {
  return (
    <Flex flexDirection={"column"} mt="20px">
      <Box
        padding={"10px"}
        borderRadius="full"
        mb="15px"
        bg="rgba(242, 249, 253, 1)"
        w="fit-content"
      >
        <BoxAdd size="20px" />
      </Box>
      <Box mb="20px">
        <Text fontWeight={"bolder"} fontSize="20px">
          Choose a service
        </Text>
        <Text fontWeight={"light"} color="#667085" fontSize={"14px"}>
          Select any of the options below
        </Text>
      </Box>
      <RadioGroup defaultValue="2" onChange={props.setRadio}>
        <ModalBodyComps
          title="I want to convert my dissertation to a research manuscript"
          subtitle=""
          bg="rgba(242, 249, 253, 1)"
          icon={<DocumentForward size={"20px"} color="rgba(43, 95, 208, 1)" />}
          value="1"
        />{" "}
        <ModalBodyComps
          title="I want to review my research manuscript for publishing"
          subtitle=""
          bg="rgba(254, 240, 199, 1)"
          icon={<DocumentText size={"20px"} color="rgba(247, 144, 9, 1)" />}
          value="2"
        />{" "}
      </RadioGroup>
    </Flex>
  );
};
