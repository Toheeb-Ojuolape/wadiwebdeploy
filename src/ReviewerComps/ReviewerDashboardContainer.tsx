import { Box, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
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

export const ReviewerDashBoardContainer = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const userData = JSON.parse(localStorage.getItem("userData") || "");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearchChange = (value: string) => {
    console.log(value);
  };

  const params = useParams() as {
    reviewRoute: string;
    subroute: string;
    settingRoute: string;
  };

  const { reviewRoute, subroute, settingRoute } = params;
  console.log(
    "🚀 ~ file: ReviewerDashboardContainer.tsx:71 ~ ReviewerDashBoardContainer ~ settingRoute",
    settingRoute
  );
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
        {...userData}
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
        {reviewRoute === "home" && (
          <ReviewHome projectData={props.projectData} />
        )}
        {reviewRoute === "calendar" && <Calendar />}
        {reviewRoute === "proposals" && <AcceptedProposal />}
        {reviewRoute === "requests" && <AllRequests />}
        {reviewRoute === "projects" && <AllProjects />}
        {reviewRoute === "wallets" && <Wallets />}
        {reviewRoute === "settings" && <Settings page={0} />}
        {settingRoute === "account" && <Settings page={0} />}
        {settingRoute === "change-password" && <Settings page={0} />}
        {settingRoute === "delete-account" && <Settings page={0} />}
        {settingRoute === "basic-info" && <Settings page={1} />}
        {settingRoute === "professional-info" && <Settings page={1} />}{" "}
        {settingRoute === "download-data" && <Settings page={2} />}
        {settingRoute === "email-settings" && <Settings page={2} />}
        {settingRoute === "account-home" && <Settings page={0} />}{" "}
        {settingRoute === "login-activity" && <Settings page={3} />}
        {settingRoute === "profile-home" && <Settings page={1} />}
        {settingRoute === "privacy-home" && <Settings page={2} />}
      </Suspense>
    </Box>
  );
};
