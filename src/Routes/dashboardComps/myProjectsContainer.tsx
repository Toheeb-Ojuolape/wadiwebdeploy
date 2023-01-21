import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { MyProjectComps } from "./myProjectsComps/myProjectsComps";
import { UpComingComps,} from "./myProjectsComps/upcomingEvents";

export const MyProjectsContainer = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
  
      <Flex
      flexDirection={'row'}
      flexWrap='wrap'
      mt='20px'
      >
        <Box mr={!isMobile ?'20px': "0px"} padding='10px' borderRadius='md' bg='white' w={!isMobile ? '60%': "100%"}>
        <MyProjectComps /></Box>
        <Flex w={!isMobile ?'38%': "100%"} mt={isMobile  ? '20px': ""} >
        <UpComingComps/></Flex>
      </Flex>
    
  );
};
