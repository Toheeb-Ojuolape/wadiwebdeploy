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
  DrawerOverlay,
} from "@chakra-ui/react";

export const SideBarMobile = (props: any) => {
  return (
    <Drawer
      variant="secondary"
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
    >
      <DrawerContent bg={"rgb(28, 67, 153)"}>
        <div className="fixed top-0 right-0 h-screen w-[300px] flex flex-col text-white p-">
          <div className="mb-12">
            <LogoComp />
          </div>
          <SideBarButton name="Dashboard" icon={<DashboardIcon />} />
          <SideBarButton name="PublishIT" icon={<PublishIcon />} />
          <SideBarButton name="Wadi Academy" icon={<AcademyIcon />} />
          <SideBarButton name="Send Sample" icon={<SampleIcon />} />
          <SideBarButton name="Forum" icon={<ForumIcon />} />
          <SideBarButton name="Settings" icon={<SettingsIcon />} />

          <SideBarButton name="Log out" icon={<LogoutIcon />} />
          <SideBarButton
            onClick={props.onClose}
            name="Close"
            icon={<CloseButton />}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
