import { SideBarButton } from "./button/sidebarButton";

import { Drawer, DrawerContent, Flex, } from "@chakra-ui/react";
import { Routes } from "./routes";
import { Link, useParams } from "react-router-dom";
import { NameAndPosition } from "./topbar/rightSide/rightSide";
import { TopBarTag } from "./topbar/rightSide/topBarTag";
import { useState } from "react";

import { LogoutCurve, Setting2 } from "iconsax-react";


export const SideBarMobile = (props: {
  isOpen: boolean;
  onClose: () => void;
  profession: string;
  name: string;
  position: string;
}) => {


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
            <NameAndPosition name={props.name} position={props.position} />
            <TopBarTag title={props.profession} />
          </Flex>
          
          {Routes.map((route, index) => {
            return (
              <>
                <Link to={route.routes}>
                  <SideBarButton
                    name={route.title}
                    icon={route.icon}
                    key={index}
                    onClick={() => {
                      setActive(index);

                      props.onClose();
                    }}
                    isActive={active === index}
                  />
                </Link>
              </>
            );
          })}
        <Link to={'/review/settings/'}>
        <SideBarButton
          key={5}
          name="Settings"
          icon={
            <Setting2
              size={"20"}
              color="rgba(41, 45, 50, 1)"
              variant="TwoTone"
            />
          }
          onClick={() => {
            setActive(5);
            props.onClose();
          }}
          isActive={active === 5}
        /></Link>
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
      </DrawerContent>
    </Drawer>
  );
};
