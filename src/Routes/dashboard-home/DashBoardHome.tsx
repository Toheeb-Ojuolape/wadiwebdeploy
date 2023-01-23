import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { ActivityCommunityContainer } from "../dashboardComps/activityCommunityContainer";
import { GoodDayContainer } from "../dashboardComps/goodayContainer";
import { MyProjectsContainer } from "../dashboardComps/myProjectsUpComingEventContainer";
import { OverViewContainer } from "../dashboardComps/overviewContainer";

export const DashBoardHome = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        {/* <GoodDayContainer name="Toheeb" /> */}
        <OverViewContainer />
        <MyProjectsContainer />
        <ActivityCommunityContainer />
      </Box>
      {/*
      {!isMobile && <Box  padding={"20px"}>vvvv</Box>} */}
    </Flex>
  );
};
