import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { GoodDayContainer } from "../dashboardComps/goodayContainer";
import { MyProjectsContainer } from "../dashboardComps/myProjectsContainer";
import { OverViewContainer } from "../dashboardComps/overviewContainer";

export const DashBoardHome = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex>
      <Box
        padding={"20px"}
        width={!isMobile ? "60vw" : "100vw"}
        height={"100vw"}
        borderRight="1px solid rgba(220, 214, 214, 1)"
      >
        <GoodDayContainer name="Toheeb" />
        <OverViewContainer/>
        <MyProjectsContainer/>
      </Box>
      {!isMobile && <Box  padding={"20px"}>vvvv</Box>}
    </Flex>
  );
};
