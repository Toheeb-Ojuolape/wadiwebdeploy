import { SettingsIcon } from "@chakra-ui/icons";
import {
  Book,
  Category,
  DocumentCloud,
  Drop,
  MessageText,
  Notification,
} from "iconsax-react";
import AcademyIcon from "../icon/academyIcon";

const dashboard = "dashboard";
export const Routes = [
  { routes: `/${dashboard}`, title: "Dashboard", icon: <Category size="20" color="#475467"/> },
  {
    routes: `/${dashboard}/publish`,
    title: "PublishIT",
    icon: <DocumentCloud size="20" color="#475467" variant="TwoTone" />,
  },
  {
    routes: `/${dashboard}/academy`,
    title: "Wadi Academy",
    icon: <Book size="20" color="#475467" />,
  },
  {
    routes: `/${dashboard}/send-sample`,
    title: "Send Sample",
    icon: <Drop size="20" color="#475467" variant="TwoTone" />,
  },
  {
    routes: `/${dashboard}/forum`,
    title: "Forum",
    icon: <MessageText size="20" color="#475467" variant="TwoTone" />,
  },
  {
    routes: `/${dashboard}/notification`,
    title: "Forum",
    icon: <Notification size="20" color="#475467" variant="TwoTone" />,
  },
 
];
