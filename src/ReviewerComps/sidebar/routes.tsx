import { SettingsIcon } from "@chakra-ui/icons";
import {
  Add,
  AddSquare,
  Book,
  BoxTime,
  CalendarTick,
  Category,
  DocumentCloud,
  Drop,
  Edit,
  MessageText,
  Notification,
  Send,
  Wallet3,
} from "iconsax-react";


const dashboard = "review";
export const Routes = [
  {
    routes: `/${dashboard}/home`,
    title: "Dashboard",
    icon: <Category size="20" color="#475467" />,
  },
  {
    routes: `/${dashboard}/requests`,
    title: "Requests",
    icon: <Send size="20" color="#475467" variant="TwoTone" />,
  
  },
  {
    routes: `/${dashboard}/projects`,
    title: "Projects",
    icon: <BoxTime size="20" color="#475467" />,
  },
  {
    routes: `/${dashboard}/calendar`,
    title: "Calendar",
    icon: <CalendarTick size="20" color="#475467" variant="TwoTone" />,
  },
  {
    routes: `/${dashboard}/wallets`,
    title: "Wallets",
    icon: <Wallet3 size="20" color="#475467" variant="TwoTone" />,
  },

];
