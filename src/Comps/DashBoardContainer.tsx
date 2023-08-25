import { Box, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { lazy, Suspense} from "react";
import { useParams} from "react-router-dom";
import NotificationsComponent from "../components/Notifications/NotificationsComponent";
import SendSampleComponent from "../components/SendSample/SendSampleComponent";
import { Loading } from "../Routes-Review/loading/loading";
import { Settings } from "../Routes/Settings/Settings";
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
const PublishSlug = lazy(() =>
  import("../Routes/publishITSlug/PublishSlug").then((module) => ({
    default: module.PublishSlug,
  }))
);

export const DashBoardContainer = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
 

 

  const params = useParams() as { route: string; subroute: string; settingRoute: string  };
  const { route, subroute, settingRoute } = params

  

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
          {route === "settings" && <Settings page={0} />}
          {route === "send-sample" && <SendSampleComponent />}
          {route === "notification" && <NotificationsComponent />}
          {subroute === "new-project" && <AddNewProject page={0} user={props.userData} />}
          {subroute === "my-projects" && <ManageProjects />}
          {subroute &&
          subroute !== "my-projects" &&
          subroute !== "new-project" &&
          subroute.length > 0 ? (
            <PublishSlug userData={props.userData} subroute={subroute} page={1} />
          ) : null}
          {settingRoute === "account" && <Settings userData={props.userData} page={0} />}
          {settingRoute === "change-password" && <Settings userData={props.userData} page={0} />}
          {settingRoute === "delete-account" && <Settings userData={props.userData} page={0} />}
          {settingRoute === "basic-info" && <Settings userData={props.userData} page={1} />}
          {settingRoute === "professional-info" && <Settings userData={props.userData} page={1} />}{" "}
          {settingRoute === "download-data" && <Settings userData={props.userData} page={2} />}
          {settingRoute === "email-settings" && <Settings userData={props.userData} page={2} />}
          {settingRoute === "account-home" && <Settings userData={props.userData} page={0} />}{" "}
          {settingRoute === "login-activity" && <Settings userData={props.userData} page={3} />}
          {settingRoute === "profile-home" && <Settings userData={props.userData} page={1} />}
          {settingRoute === "privacy-home" && <Settings userData={props.userData} page={2} />}
        </Suspense>
      </Box>
    </Box>
  );
};
