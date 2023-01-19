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
        width={ "100vw"}
        height={"100vw"}
     
      >
        {/* <GoodDayContainer name="Toheeb" /> */}
        <OverViewContainer/>
        <MyProjectsContainer/>
      </Box>
       {/*
      {!isMobile && <Box  padding={"20px"}>vvvv</Box>} */}
    </Flex>
  );
};
