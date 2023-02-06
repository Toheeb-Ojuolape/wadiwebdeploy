import { Box, Flex, Spacer, useMediaQuery } from "@chakra-ui/react";
import { CommunityContainer } from "./communityComps/community";
import { UpComingComps } from "./myProjectsComps/upcomingEvents";
import { ActivityContainer } from "./timelineComps/activityContainer";
import { Timeline } from "./timelineComps/timeLineComps";

export const ActivityCommunityContainer = (props: any) => {
    const [isMobile] = useMediaQuery("(max-width: 1300px)");
    return (
        <Flex
        flexDirection={'row'}
        flexWrap='wrap'
        mt='20px'
        className="animate__animated animate__fadeInUp"

        >
          <Box padding='10px' borderRadius='md' bg='white' w={!isMobile ? '49%': "100%"}>
            <ActivityContainer/>
      </Box>
          <Spacer/>
          <Flex padding='10px' borderRadius='md' bg='white' w={!isMobile ?'49%': "100%"} mt={isMobile  ? '20px': ""} >
         <CommunityContainer/></Flex>
        </Flex>
      
    );
    };