import { Box, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { lazy, Suspense, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Loading } from "../Routes-Review/loading/loading";

import { TopBar } from "./sidebar/topbar/topbar";

const DashBoardHome = lazy(() =>
  import("../Routes/dashboard-home/DashBoardHome").then((module) => ({
    default: module.DashBoardHome,
  }))
);
const AddNewProject = lazy(() =>
  import("../Routes/publishIT/AddNewProject").then((module) => ({
    default: module.AddNewProject,
  }))
);
const ManageProjects = lazy(() =>
  import("../Routes/publishIT/ManageProject").then((module) => ({
    default: module.ManageProjects,
  }))
);

export const DashBoardContainer = (props: any) => {
  const location = useLocation();
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setsearch] = useState("");

  const handleSearchChange = (value: string) => {
    setsearch(value);
  };

  const params = useParams() as { route: string; subroute: string };
  const { route, subroute } = params;
  console.log(location.pathname);
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
        {...props.userData}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleSearchChange={handleSearchChange}
      />
      <Box
        ml={!isMobile ? "10px" : "0px"}
        mt="80px"
        mr={!isMobile ? "10px" : "0px"}
      >
        <Suspense fallback={<Loading loading />}>
          {route === "home" && (
            <DashBoardHome
              userData={props.userData}
              eventData={props.eventData}
              forumData={props.forumData}
              projectData={props.projectData}
            />
          )}

          {subroute === "new-project" && <AddNewProject page={0} />}
          {subroute === "my-projects" && <ManageProjects />}
          {subroute &&
          subroute !== "my-projects" &&
          subroute !== "new-project" &&
          subroute.length > 0 ? (
            <AddNewProject page={2}/>
          ) : null}
        </Suspense>
      </Box>
    </Box>
  );
};
