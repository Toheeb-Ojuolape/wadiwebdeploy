import { Box, Button, Center, Text } from "@chakra-ui/react";
import { TickCircle } from "iconsax-react";

export const ModalBodyComp = (props: {onClose: any,title: string, subtitle:string }) => {
  return (
    <Center flexDirection={"column"} padding='20px'>
      <Center
        w="fit-content"
        h="fit-content"
        bg="rgba(236, 253, 243, 1)"
        padding="10px"
        borderRadius={"full"}
        mb="20px"
      >
        <Center
          w="fit-content"
          h="fit-content"
          bg="rgba(209, 250, 223, 1)"
          borderRadius={"full"}
          padding="10px"
        >
          <TickCircle color="rgba(18, 183, 106, 1)" />
        </Center>
      </Center>
      <Text mb="10px" fontSize={"18px"} fontWeight="extrabold">
    {props.title}
      </Text>
      <Text
      
        textAlign="center"
        mb="20px"
        fontSize={"14px"}
        color="rgba(102, 112, 133, 1)"
      >
        {props.subtitle}
      </Text>
      <Button bg="rgba(43, 95, 208, 1)" w="100px" color="white" onClick={props.onClose}>
        Ok
      </Button>
    </Center>
  );
};
