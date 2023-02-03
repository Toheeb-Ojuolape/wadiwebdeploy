import { Box, Stack, Text} from "@chakra-ui/react";
import { OutLineButton } from "./buttons/outLineButton";
import { WhiteButton } from "./buttons/whiteButton";
import bg from "./welcome-bg.webp";


export const GoodDayContainer = (props: any) => {
  return (
    <Box
      backgroundImage={bg}
      backgroundRepeat={"none"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      padding="20px"
      color={"white"}
      borderRadius={"xl"}
    >
      <Text fontSize={"20px"} fontWeight={500}>
        Good day, {props.name}
      </Text>
      <Text fontSize={"16px"} fontWeight={"light"}>
        What would you like to do today ?
      </Text>
      <Stack direction="row" spacing={4} align="center" mt={"10px"}>
        <WhiteButton text="Add Project" />
        <OutLineButton text="Manage Project" />
      
        
      </Stack>
    </Box>
  );
};
