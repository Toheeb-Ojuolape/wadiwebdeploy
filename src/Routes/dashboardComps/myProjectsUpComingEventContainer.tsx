import { Box, Flex, Spacer, useMediaQuery } from "@chakra-ui/react";
import { MyProjectComps } from "./myProjectsComps/myProjectsComps";
import { UpComingComps,} from "./myProjectsComps/upcomingEvents";

export const MyProjectsContainer = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");
  return (
  
      <Flex
      flexDirection={'row'}
      flexWrap='wrap'
      mt='20px'
      className="animate__animated animate__fadeInUp"
      >
        <Box padding='10px' borderRadius='md' bg='white' w={!isMobile ? '60%': "100%"} h='fit-content'>
        <MyProjectComps userData={props.userData} projectData={props.projectData}/></Box>
        <Spacer/>
        <Flex w={!isMobile ?'38%': "100%"} mt={isMobile  ? '20px': ""} >
        <UpComingComps eventData={props.eventData}/></Flex>
      </Flex>
    
  );
};
