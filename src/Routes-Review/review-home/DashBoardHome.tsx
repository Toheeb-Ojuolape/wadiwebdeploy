import { Box, Flex } from "@chakra-ui/react";

import { OverViewContainer } from "../dashboardComps/overviewContainer";
import { ProjectsAndEarnings } from "../dashboardComps/projectsAndEarnings";

export const ReviewHome = (props: any) => {
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        {/* <GoodDayContainer name="Toheeb" /> */}
        <OverViewContainer />
        <ProjectsAndEarnings/>
      </Box>
      {/*
      {!isMobile && <Box  padding={"20px"}>vvvv</Box>} */}
    </Flex>
  );
};
