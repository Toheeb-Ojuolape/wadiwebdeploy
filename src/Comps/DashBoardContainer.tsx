import { Box, Fade } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { DashBoardHome } from "../Routes/dashboard-home/DashBoardHome";

import { TopBar } from "./sidebar/topbar/topbar";

export const DashBoardContainer = () => {
  const params = useParams() as { route: string };
  const { route } = params;
  console.log(route);
  return (
    <Box
      float="right"
      minHeight="100vh"
      height="100%"
      overflow="auto"
      position="relative"
      maxHeight="100%"
      transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
      transitionDuration=".2s, .2s, .35s"
      transitionProperty="top, bottom, width"
      transitionTimingFunction="linear, linear, ease"
    >
      <TopBar />
      <Fade in={route === undefined}>
        {" "}
        <Box mt={'60px'}>
        <DashBoardHome /></Box>
      </Fade>
    </Box>
  );
};
