import { Box, Button, HStack, SimpleGrid } from "@chakra-ui/react";

export const SideBarButton = (props: any) => {
  return (
    // <Button
    //   bg=""
    //   _hover={{ bg: "rgb(11, 26, 60)" }}
    //   borderRadius="0px"
    //   variant="solid"
    //   fontWeight={"hairline"}
    //   textAlign='left'
    //   mb="10px"
    // >
    //   <p className="text-left">{props.name}</p>
    // </Button>

    <HStack
      padding="10px 0px 10px 20px"
      w="100%"
      borderRadius="6px"
      className="cursor-pointer"
      _hover={{
        bg: "linear-gradient(262.82deg, rgba(255, 255, 255, 0.3) -30.37%, rgba(255, 255, 255, 0.1) 120.21%)",
      }}
  
    >
      <Box height="fit-content" paddingRight="2">
        {props.icon}
      </Box>
      <Box w="" height="fit-content">
        {props.name}
      </Box>
    </HStack>
  );
};
