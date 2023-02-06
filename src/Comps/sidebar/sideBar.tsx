import { LogoComp, LogoCompBlue } from "../header/logoComp";
import DashboardIcon from "../icon/dashBoardIcon";
import { SideBarButton } from "./button/sidebarButton";
import { LogoutIcon } from "../icon/logoutIcon";
import PublishIcon from "../icon/publishIcon";
import AcademyIcon from "../icon/academyIcon";
import SampleIcon from "../icon/sampleIcon";
import ForumIcon from "../icon/forumIcon";
import { SettingsIcon } from "@chakra-ui/icons";
import { Link, Route, useParams } from "react-router-dom";
import { useState } from "react";
import { Routes } from "./routes";
import { LogoutCurve, Setting2 } from "iconsax-react";
import { CreateNewButton } from "./button/createNewButton";
import { Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { SubButton } from "./button/subButton";

export const SideBar = (props: any) => {
  const params = useParams() as { route: string };
  const { route } = params;

  const routeToIndex = (route: string) => {
    switch (route) {
      case "undefined":
        return 0;
      case "publish":
        return 1;
      case "academy":
        return 2;
      case "sample":
        return 3;
      case "forum":
        return 4;
      default:
        return 0;
    }
  };
  const [active, setActive] = useState(routeToIndex(route));
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="fixed z-0 top-0 left-0 h-screen w-60 flex flex-col bg-[#ffffff] text-[#475467] p-">
      <div className=" flex pl-8 mb-12 mt-5  content-start">
      <Link to='/dashboard/home'>
        <LogoCompBlue /></Link>
      </div>
      <CreateNewButton />
      {Routes.map((route, index) => {
        return (
          <>
            <Link to={route.routes}>
              <SideBarButton
                name={route.title}
                icon={route.icon}
                key={index}
                onClick={() => {
                  if (index !== 1) {
                    setActive(index);
                  } else {
                    onToggle();
                  }
                }}
                isActive={active === index}
              />
            </Link>
            <Box>
              {route.subRoutes &&
                route.subRoutes.map((subRoute, index) => {
                  return (
                    <Collapse in={isOpen} animateOpacity>
                      <Link to={subRoute.routes}>
                        <SubButton
                          name={subRoute.title}
                          icon={subRoute.icon}
                          key={index + 10}
                          onClick={() => {
                            setActive(index + 10);
                          }}
                          isActive={active === index + 10}
                        />
                      </Link>
                    </Collapse>
                  );
                })}
            </Box>
          </>
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
