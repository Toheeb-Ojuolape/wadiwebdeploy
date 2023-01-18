import { SettingsIcon } from "@chakra-ui/icons";
import AcademyIcon from "../icon/academyIcon";
import DashboardIcon from "../icon/dashBoardIcon";
import ForumIcon from "../icon/forumIcon";
import PublishIcon from "../icon/publishIcon";
import SampleIcon from "../icon/sampleIcon";

const dashboard = "dashboard";
export const Routes = [
  { routes: `/${dashboard}`, title: "Dashboard", icon: <DashboardIcon /> },
  {
    routes: `/${dashboard}/publish`,
    title: "PublishIT",
    icon: <PublishIcon />,
  },
  {
    routes: `/${dashboard}/academy`,
    title: "Wadi Academy",
    icon: <AcademyIcon />,
  },
  {
    routes: `/${dashboard}/send-sample`,
    title: "Send Sample",
    icon: <SampleIcon />,
  },
  { routes: `/${dashboard}/forum`, title: "Forum", icon: <ForumIcon /> },
  {
    routes: `/${dashboard}/settings`,
    title: "Settings",
    icon: <SettingsIcon />,
  },
];
