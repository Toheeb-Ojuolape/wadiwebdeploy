import React from "react";
import {
  Avatar,
  Button,
  HStack,
  Spinner,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-react";
import { signOut, getAuth } from "firebase/auth";

export const Profile = (props: { profilePic: string; isDesktop: boolean }) => {
  const [isLoading, setLoading] = React.useState(false);

  const logOut = () => {
    setLoading(true);
    const auth = getAuth();
    signOut(auth).then((response) => {
      console.log(response);
      localStorage.removeItem("wadiKey");
      localStorage.removeItem("userData");
      window.location.href = "/login";
      setLoading(false);
    });
  };

  return (
    <Menu>
      <MenuButton
        color={"black"}
        bg="white"
        m="0"
        pl={props.isDesktop ? "10px" : "0px"}
        pr={props.isDesktop ? "10px" : "0px"}
        _hover={{ bg: "" }}
        _active={{ bg: "" }}
        as={Button}
      >
        <HStack>
          <Avatar
            borderRadius={!props.isDesktop ? "md" : "full"}
            w={props.isDesktop ? "50px" : "36px"}
            h={props.isDesktop ? "50px" : "36px"}
            src={props.profilePic}
          />
          {props.isDesktop && <ArrowDown2 className="m-0" />}
        </HStack>
      </MenuButton>
      <MenuList color={"black"}>
        <MenuItem onClick={logOut}>
          {" "}
          {!isLoading ? "Logout" : <Spinner size="sm" color="blue" />}{" "}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
