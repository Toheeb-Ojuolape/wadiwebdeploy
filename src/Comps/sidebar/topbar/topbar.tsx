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
import { useRef } from "react";
import { SideBar } from "../sideBar";
import { SideBarMobile } from "../sideBarMobile";
import { SearchBar } from "./comps/searchBar";
import { RightSide } from "./rightSide/rightSide";

export const TopBar = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  const btnRef = useRef();
  return (
    <Box
      bg="white"
      p={4}
      color="white"
      className={!isMobile ? "w-[calc(100%-12rem)] fixed" : "w-full fixed"}
    >
      <Flex>
        <SearchBar />

        {!isMobile && <RightSide name='Toheeb Ojuolape'/>}
        {isMobile && <IconButton
          onClick={onOpen}
          aria-label="Nav"
          icon={<HamburgerIcon color={"black"} />}
        />}
        <SideBarMobile isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>
    </Box>
  );
};
