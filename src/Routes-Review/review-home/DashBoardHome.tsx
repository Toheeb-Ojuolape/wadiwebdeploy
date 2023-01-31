import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

import { OverViewContainer } from "../dashboardComps/overviewContainer";
import { ProjectsAndEarnings } from "../dashboardComps/projectsAndEarnings";
import { RequestAndDeadline } from "../dashboardComps/requestAndDeadline";
import { Loading } from "../loading/loading";

export const ReviewHome = (props: any) => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    console.log("My component has finished rendering");
  }, []);
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        <Loading loading={loading} />
        {/* <GoodDayContainer name="Toheeb" /> */}
        <OverViewContainer />
        <ProjectsAndEarnings />
        <RequestAndDeadline />
      </Box>
      {/*
      {!isMobile && <Box  padding={"20px"}>vvvv</Box>} */}
    </Flex>
  );
};
