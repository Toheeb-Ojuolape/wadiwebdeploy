import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Spacer, useMediaQuery } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { LogoCompDark } from "../../header/logoComp"
import { NotificationComps } from "./comps/notification";
import { SearchBar } from "./comps/searchBar";
import { RightSide } from "./rightSide/rightSide";
import { SearchNormal1 } from "iconsax-react";
import { Profile } from "./rightSide/profile";
import { Loading } from "../../../Routes-Review/loading/loading";
const SideBarMobile = lazy(() => import("../sideBarMobile").then((mod) => ({ default: mod.SideBarMobile })));

export const TopBar = (props: {
  profession: string;
  hasNotification: boolean;
  notificationCount: number;
  firstName:string,
  title: string;
  photoURL: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  handleSearchChange: (value: string) => void;
}) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box
      backgroundColor={"white"}
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      display={"block"}
      position={"fixed"}
      zIndex="10"
      mx="auto"
      pt={!isMobile ? "20px" : "10px"}
      pb={!isMobile ? "20px" : "10px"}
      ps={{
        xl: "12px",
      }}
      pr="30px"
      w={{
        base: "calc(100vw )",
        md: "calc(100vw)",
        lg: "calc(100vw - 15rem)",
        xl: "calc(100vw - 15rem)",
        "2xl": "calc(100vw - 15rem)",
      }}
    >
      <Flex>
        {isMobile ? (
          <Flex>
            <Box ml="20px" h="fit-content" position={"inherit"} left="0">
              <LogoCompDark />
            </Box>
            <Flex position={"absolute"} right="0">
              <IconButton
                marginRight={"20px"}
                aria-label="Nav"
                icon={<SearchNormal1 size={"20px"} color={"black"} />}
              />
              <Flex h="80%">
                <div className="mr-6">
                  {" "}
                  <NotificationComps hasNotification={true} />
                </div>
                <Profile profilePic={props.photoURL} isDesktop={false} />
                <IconButton
                  marginRight={"20px"}
                  onClick={props.onOpen}
                  aria-label="Nav"
                  icon={<HamburgerIcon color={"black"} />}
                />
              </Flex>
            </Flex>
          </Flex>
        ) : null}

        {!isMobile ? (
          <>
            <Box>
              <SearchBar
                onChange={(e: any) => {
                  props.handleSearchChange(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </Box>
            <Spacer />
            <Box>
              <RightSide
                name={props.firstName}
                position={props.title}
                profilePic={props.photoURL}
                profession={props.title}
                notificationCount={props.notificationCount}
                hasNotification={props.hasNotification}
              />
            </Box>
          </>
        ) : null}
        <Suspense fallback={<Loading loading />}>
          <SideBarMobile
            isOpen={props.isOpen}
            onClose={props.onClose}
            profession={props.profession}
            position={props.title}
            name={props.firstName}
          />{" "}
        </Suspense>
      </Flex>
    </Box>
  );
};
