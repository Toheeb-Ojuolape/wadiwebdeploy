import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { LogoComp, LogoCompDark } from "../../header/logoComp";
import { SideBar } from "../sideBar";
import { SideBarMobile } from "../sideBarMobile";
import { SearchBar } from "./comps/searchBar";
import { RightSide } from "./rightSide/rightSide";

export const TopBar = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [search, setsearch] = useState("");

  const btnRef = useRef();
  return (
    <Box
      backgroundColor={"white"}
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      display={"block"}
      
      position={"fixed"}
      mx="auto"
      pt="10px"
      pb="10px"
      ps={{
        xl: "12px",
      }}
      w={{
        base: "calc(100vw )",
        md: "calc(100vw)",
        lg: "calc(100vw)",
        xl: "calc(100vw - 15rem)",
        "2xl": "calc(100vw - 15rem)",
      }}
    >
      <Flex>
        {isMobile ? (
          <Box ml="20px" h='fit-content'>
            <LogoCompDark />
          </Box>
        ) : null}
        <SearchBar
          onChange={(e: any) => {
            setsearch(e.target.value);
            console.log(e.target.value);
          }}
        />

        {!isMobile && <RightSide name="Toheeb Ojuolape" />}
        
        {isMobile && (
          <IconButton
            marginRight={"20px"}
            onClick={onOpen}
            aria-label="Nav"
            icon={<HamburgerIcon color={"black"} />}
          />
        )}
        <SideBarMobile isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
    </Box>
  );
};
