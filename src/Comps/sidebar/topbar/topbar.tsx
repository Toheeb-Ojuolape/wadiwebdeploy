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
} from "@chakra-ui/react";
import { useRef } from "react";
import { SideBar } from "../sideBar";
import { SideBarMobile } from "../sideBarMobile";
import { SearchBar } from "./comps/searchBar";
import { RightSide } from "./rightSide/rightSide";



export const TopBar = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box bg="white" p={4} color="white" className="ml-46 w-full fixed z-10">
      <Flex>
        <SearchBar />
        
        <RightSide/>
        <IconButton
          onClick={onOpen}
          aria-label="Nav"
          icon={<HamburgerIcon color={"black"} />}
        />
        <SideBarMobile isOpen = {isOpen} onClose = {onClose} onOpen = {onOpen}/>
      </Flex>
      
    </Box>
  );
};
