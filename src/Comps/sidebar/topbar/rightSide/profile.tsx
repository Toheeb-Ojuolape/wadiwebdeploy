import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-react";

export const Profile = () => {
  return (
    <Menu >
      <MenuButton
        color={"black"}
        bg="white"

        m={'2000px'}
        _hover={{bg:''}}
        _active={{bg:''}}
       
        as={Button}

      >
        <HStack><Avatar/><ArrowDown2 className="m-0" /></HStack>
      </MenuButton>
      <MenuList color={"black"}>
        <MenuItem>PlaceHolder</MenuItem>
        <MenuItem>PlaceHolder</MenuItem>
        <MenuItem>PlaceHolder</MenuItem>
        <MenuItem>PlaceHolder</MenuItem>
      </MenuList>
    </Menu>
  );
};
