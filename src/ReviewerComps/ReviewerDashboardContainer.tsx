import { Box, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Suspense, useState, lazy } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "../Routes-Review/loading/loading";

import { TopBar } from "./sidebar/topbar/topbar";

const ReviewHome = lazy(() =>
  import("../Routes-Review/review-home/DashBoardHome").then((module) => ({
    default: module.ReviewHome,
  }))
);
const Wallets = lazy(() =>
  import("../Routes-Review/wallets/Wallets").then((module) => ({
    default: module.Wallets,
  }))
);
const Calendar = lazy(() =>
  import("../Routes-Review/calendar-home/Calendar").then((module) => ({
    default: module.Calendar,
  }))
);
const AcceptedProposal = lazy(() =>
  import("../Routes-Review/acceptedPropsals/AcceptedProposals").then(
    (module) => ({ default: module.AcceptedProposal })
  )
);
const AllRequests = lazy(() =>
  import("../Routes-Review/allRequests/AllRequests").then((module) => ({
    default: module.AllRequests,
  }))
);
const AllProjects = lazy(() =>
  import("../Routes-Review/allProjects/AllProjects").then((module) => ({
    default: module.AllProjects,
  }))
);
const Settings = lazy(() =>
  import("../Routes-Review/Settings/Settings").then((module) => ({
    default: module.Settings,
  }))
);
const topBarData = {
  profession: "Reviewer",
  name: "Isaac Ojo",
  profilePic:
    "https://lh3.googleusercontent.com/-N43TPVUqQpk/AAAAAAAAAAI/AAAAAAAABK8/ONS86r57Wnk/photo.jpg?sz=256",
  hasNotification: true,
  notificationCount: 5,
  position: "Frontend Developer",
};

export const ReviewerDashBoardContainer = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setsearch] = useState("");

  const handleSearchChange = (value: string) => {
    setsearch(value);
  };

  const params = useParams() as {
    reviewRoute: string;
    subroute: string;
    settingRoute: string;
  };
 
  const { reviewRoute, subroute, settingRoute } = params;
  console.log("🚀 ~ file: ReviewerDashboardContainer.tsx:71 ~ ReviewerDashBoardContainer ~ settingRoute", settingRoute)
  console.log(subroute);
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
      <Box
        ml={!isMobile ? "10px" : "0px"}
        mt="80px"
        mr={!isMobile ? "10px" : "0px"}
      ></Box>
      <Suspense fallback={<Loading loading />}>
        {reviewRoute === "home" && <ReviewHome />}
        {reviewRoute === "calendar" && <Calendar />}
        {reviewRoute === "proposals" && <AcceptedProposal />}
        {reviewRoute === "requests" && <AllRequests />}
        {reviewRoute === "projects" && <AllProjects />}
        {reviewRoute === "wallets" && <Wallets />}
        {reviewRoute === "settings" && <Settings  />}
        {settingRoute === "account" && <Settings  />}
        {settingRoute === "change-password" && <Settings  />}
      </Suspense>
    </Box>
  );
};
