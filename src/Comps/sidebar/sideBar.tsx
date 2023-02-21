import { LogoCompBlue } from "../header/logoComp";

import { SideBarButton } from "./button/sidebarButton";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Routes } from "./routes";
import { LogoutCurve, Setting2 } from "iconsax-react";
import { CreateNewButton } from "./button/createNewButton";
import { Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { SubButton } from "./button/subButton";

export const SideBar = (props: any) => {
  const params = useParams() as { route: string };
  const { route } = params;
  const history = useNavigate();
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
    <div className="fixed z-0 top-0 overflow-y-auto left-0 h-full w-60 overflow-hidden flex flex-col bg-[#ffffff] text-[#475467] p-">
      <div className=" flex pl-8 mb-12 mt-5  content-start">
        <Link to="/dashboard/home">
          <LogoCompBlue />
        </Link>
      </div>
      <Box height={"fit-content"}>
        <CreateNewButton />
      </Box>
      {Routes.map((route, index) => {
        return (
          <>
            <SideBarButton
              name={route.title}
              icon={route.icon}
              key={index}
              onClick={() => {
                if (index !== 1) {
                  history(route.routes);
                  setActive(index);
                } else {
                  onToggle();
                }
              }}
              isActive={active === index}
            />

            <Box>
              {route.subRoutes &&
                route.subRoutes.map((subRoute, index) => {
                  return (
                    <Collapse in={isOpen} animateOpacity>
                      <SubButton
                        name={subRoute.title}
                        icon={subRoute.icon}
                        key={index + 10}
                        onClick={() => {
                          history(subRoute.routes);
                          setActive(index + 10);
                        }}
                        isActive={active === index + 10}
                      />
                    </Collapse>
                  );
                })}
            </Box>
          </>
        );
      })}

      <div className="mt-auto w-full">
        <SideBarButton
          onClick={() => {
            history("/dashboard/settings");
            setActive(6);
          }}
          name="Settings"
          icon={
            <Setting2
              size={"20"}
              color="rgba(41, 45, 50, 1)"
              variant="TwoTone"
            />
          }
          isActive={active === 6}
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
