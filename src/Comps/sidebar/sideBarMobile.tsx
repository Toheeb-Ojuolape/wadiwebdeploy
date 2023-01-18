import { LogoComp } from "../header/logoComp";
import DashboardIcon from "../icon/dashBoardIcon";
import { SideBarButton } from "./button/sidebarButton";
import { LogoutIcon } from "../icon/logoutIcon";
import PublishIcon from "../icon/publishIcon";
import AcademyIcon from "../icon/academyIcon";
import SampleIcon from "../icon/sampleIcon";
import ForumIcon from "../icon/forumIcon";
import { SettingsIcon } from "@chakra-ui/icons";
import {
  CloseButton,
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";
import { Routes } from "./routes";
import { Link } from "react-router-dom";

export const SideBarMobile = (props: any) => {
  return (
    <Drawer
     
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size='xs'
     
    >
      <DrawerContent bg={"rgb(28, 67, 153)"} >
        <div className="fixed top-0 right-0 h-screen w-[300px] flex flex-col text-white p-">
          <div className="mb-12">
            <LogoComp />
          </div>
          
          {Routes.map((route) => {
        return (
          <Link to={route.routes}>
            <SideBarButton
              isRoute={route}
              name={route.title}
              icon={route.icon}
            />
          </Link>
        );
      })}
         
        </div>
      </DrawerContent>
    </Drawer>
  );
};
