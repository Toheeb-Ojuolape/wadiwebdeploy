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

export const Profile = (props: { profilePic: string, isDesktop: boolean} ) => {
  return (
    <Menu  >
      <MenuButton
        color={"black"}
        bg="white"
        m='0'
        pl={props.isDesktop ? '10px' : '0px'}
       pr={props.isDesktop ? '10px' : '0px'}
        _hover={{ bg: "" }}
        _active={{ bg: "" }}
        as={Button}
      >
        <HStack>
          <Avatar  borderRadius={!props.isDesktop ? 'md' : "full"} w={props.isDesktop ?'50px' : '36px'} h={props.isDesktop ?'50px' : '36px'} src={props.profilePic} />
          {props.isDesktop && <ArrowDown2 className="m-0" />}
        </HStack>
      </MenuButton>
      <MenuList color={"black"}>
        <MenuItem>Logout</MenuItem>

      </MenuList>
    </Menu>
  );
};
