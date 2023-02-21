
import {
  
  AddSquare,
  Book,
  Category,
  DocumentCloud,
  Drop,
  Edit,
  MessageText,
  Notification,
} from "iconsax-react";


const dashboard = "dashboard";
export const Routes = [
  {
    routes: `/${dashboard}/home`,
    title: "Dashboard",
    icon: <Category size="20" color="#475467" />,
  },
  {
    routes: ``,
    title: "PublishIT",
    icon: <DocumentCloud size="20" color="#475467" variant="TwoTone" />,
    subRoutes: [
      {
        routes: `/${dashboard}/publish/new-project`,
        title: "Add New Project",
        icon: <AddSquare size="20" color="#475467" />,
      },

      {
        routes: `/${dashboard}/publish/my-projects`,
        title: "Manage Projects",
        icon: <Edit size="20" color="#475467" />,
      },
    ],
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
    title: "Notifications",
    icon: <Notification size="20" color="#475467" variant="TwoTone" />,
  },
];
