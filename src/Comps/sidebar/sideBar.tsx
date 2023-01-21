import { LogoComp, LogoCompBlue } from "../header/logoComp";
import DashboardIcon from "../icon/dashBoardIcon";
import { SideBarButton } from "./button/sidebarButton";
import { LogoutIcon } from "../icon/logoutIcon";
import PublishIcon from "../icon/publishIcon";
import AcademyIcon from "../icon/academyIcon";
import SampleIcon from "../icon/sampleIcon";
import ForumIcon from "../icon/forumIcon";
import { SettingsIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Routes } from "./routes";
import { LogoutCurve, Setting2 } from "iconsax-react";
import { CreateNewButton } from "./button/createNewButton";

export const SideBar = (props: any) => {

  return (
    <div className="fixed z-0 top-0 left-0 h-screen w-60 flex flex-col bg-[#ffffff] text-[#475467] p-">
      <div className=" flex pl-8 mb-12 mt-5  content-start">
        <LogoCompBlue />
      </div>
      <CreateNewButton/>
      {Routes.map((route, index) => {
        return (
          <Link to={route.routes} >
            <SideBarButton
              isRoute={route}
              name={route.title}
              icon={route.icon}
              key={index}
          
            />
          </Link>
        );
      })}

      <div className="mt-auto w-full">
        <SideBarButton
          name="Settings"
          icon={
            <Setting2
              size={"20"}
              color="rgba(41, 45, 50, 1)"
              variant="TwoTone"
            />
          }
        />
        <SideBarButton
          name="Log out"
          icon={
            <LogoutCurve
              size="20"
              color="rgba(41, 45, 50, 1)"
              variant="TwoTone"
            />
          }
        />
      </div>
    </div>
  );
};
