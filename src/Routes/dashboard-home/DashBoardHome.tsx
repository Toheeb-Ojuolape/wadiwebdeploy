import { Box, Flex} from "@chakra-ui/react";
import { ActivityCommunityContainer } from "../dashboardComps/activityCommunityContainer";

import { MyProjectsContainer } from "../dashboardComps/myProjectsUpComingEventContainer";
import { OverViewContainer } from "../dashboardComps/overviewContainer";

export const DashBoardHome = (props: any) => {

  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        {/* <GoodDayContainer name="Toheeb" /> */}
        <OverViewContainer userData={props.userData} />
        <MyProjectsContainer />
        <ActivityCommunityContainer />
      </Box>
      {/*
      {!isMobile && <Box  padding={"20px"}>vvvv</Box>} */}
    </Flex>
  );
};
