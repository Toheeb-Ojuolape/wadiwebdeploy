import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const Profile = (props: any) => {
  return (
    <Menu>
      <MenuButton
        color={"black"}
        bg="white"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {props.name}
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
