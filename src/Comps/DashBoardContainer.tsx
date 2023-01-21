import { Box, Fade, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { DashBoardHome } from "../Routes/dashboard-home/DashBoardHome";

import { TopBar } from "./sidebar/topbar/topbar";

const topBarData = {
  profession: "Researcher",
  name: "Toheeb Ojoulape",
  profilePic: "https://avatars.githubusercontent.com/u/47048420?v=4",
  hasNotification: true,
  notificationCount: 5,
  position: "Frontend Developer",
};

export const DashBoardContainer = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setsearch] = useState("");

  const handleSearchChange = (value: string) => {
    setsearch(value);
  };

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
      <TopBar
        {...topBarData}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleSearchChange={handleSearchChange}
      />
      <Fade in={route === undefined}>
        {" "}
        <Box
          ml={!isMobile ? "10px" : "0px"}
          mt="80px"
          mr={!isMobile ? "10px" : "0px"}
        >
          <DashBoardHome />
        </Box>
      </Fade>
    </Box>
  );
};
