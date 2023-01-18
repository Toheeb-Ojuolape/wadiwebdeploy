import { LogoComp } from "../header/logoComp";
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

export const SideBar = (props: any) => {
  const [route, setRoute] = useState(false);
  return (
    <div className="fixed z-0 top-0 left-0 h-screen w-48 flex flex-col bg-[#1C4399] text-white p-">
      <div className=" flex pl-2 mb-12  content-start">
        <LogoComp />
      </div>
      {Routes.map((route, index) => {
        return (
          <Link to={route.routes}>
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
        <SideBarButton name="Log out" icon={<LogoutIcon />} />
      </div>
    </div>
  );
};
