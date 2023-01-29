import { Box, Flex } from "@chakra-ui/react";

import { OverViewContainer } from "../dashboardComps/overviewContainer";

export const ReviewHome = (props: any) => {
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        {/* <GoodDayContainer name="Toheeb" /> */}
        <OverViewContainer />
      </Box>
      {/*
      {!isMobile && <Box  padding={"20px"}>vvvv</Box>} */}
    </Flex>
  );
};
