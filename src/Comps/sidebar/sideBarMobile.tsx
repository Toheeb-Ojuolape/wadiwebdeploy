import { LogoComp } from "../header/logoComp";
import DashboardIcon from "../icon/dashBoardIcon";
import { SideBarButton } from "./button/sidebarButton";
import { LogoutIcon } from "../icon/logoutIcon";
import PublishIcon from "../icon/publishIcon";
import AcademyIcon from "../icon/academyIcon";
import SampleIcon from "../icon/sampleIcon";
import ForumIcon from "../icon/forumIcon";
import { SettingsIcon } from "@chakra-ui/icons";
import { CloseButton, Drawer, DrawerContent, Flex } from "@chakra-ui/react";
import { Routes } from "./routes";
import { Link } from "react-router-dom";
import { NameAndProfession, RightSide } from "./topbar/rightSide/rightSide";
import { TopBarTag } from "./topbar/rightSide/topBarTag";

export const SideBarMobile = (props: {
  isOpen: boolean;
  onClose: () => void;
  profession: string;
  name: string;
  position: string;
}) => {
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size="xs"
    >
      <DrawerContent bg={"white"}>
        <div className="fixed top-0 right-0 h-screen w-[300px] flex flex-col bg-[#ffffff] text-[#475467]">
          <Flex flexDirection="column" className="mb-12 ml-6 mt-9">
            <NameAndProfession name={props.name} position={props.position} />
            <TopBarTag
              title={props.profession}
              color="rgba(237, 112, 45, 1)"
              bg="rgba(254, 245, 239, 1)"
            />
          </Flex>

          {Routes.map((route, index) => {
            return (
              <>
                <Link to={route.routes}>
                  <SideBarButton
                    isRoute={route}
                    name={route.title}
                    icon={route.icon}
                    key={index}
                  />
                </Link>
              </>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
