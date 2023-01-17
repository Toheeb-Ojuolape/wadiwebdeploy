import { LogoComp } from "../header/logoComp";
import DashboardIcon from "../icon/dashBoardIcon";
import { SideBarButton } from "./button/sidebarButton";
import { LogoutIcon } from "../icon/logoutIcon";
import PublishIcon from "../icon/publishIcon";
import AcademyIcon from "../icon/academyIcon";
import SampleIcon from "../icon/sampleIcon";
import ForumIcon from "../icon/forumIcon";
import { SettingsIcon } from "@chakra-ui/icons";

export const SideBar = (props: any) => {
  return (
    <div className="absolute z-0 top-0 left-0 h-screen w-48 flex flex-col bg-[#1C4399] text-white p-">
      <div className="mb-12">
        <LogoComp />
      </div>
      <SideBarButton name="Dashboard" icon={<DashboardIcon />} />
      <SideBarButton name="PublishIT" icon={<PublishIcon />} />
      <SideBarButton name="Wadi Academy" icon={<AcademyIcon />} />
      <SideBarButton name="Send Sample" icon={<SampleIcon />} />
      <SideBarButton name="Forum" icon={<ForumIcon />} />
      <SideBarButton name="Settings" icon={<SettingsIcon />} />
      <div className="mt-auto w-full">
        <SideBarButton name="Log out" icon={<LogoutIcon />} />
      </div>
    </div>
  );
};
