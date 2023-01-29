import { Avatar, Box, Circle, HStack, Text } from "@chakra-ui/react";

import { NotificationComps } from "../comps/notification";
import { Profile } from "./profile";
import { TopBarTag } from "./topBarTag";

export const RightSide = (props: {
  profession: string;
  hasNotification: boolean;
  notificationCount: number;
  name: string;
  position: string;
  profilePic: string;
}) => {
  return (
    <HStack spacing={"20px"} width={"100%"} h="fit-content">
      <Box>
        <TopBarTag
          title={props.profession}
        
        />
      </Box>

      <NotificationComps
        hasNotification={props.hasNotification}
        notifcation={props.notificationCount}
      />

      <NameAndPosition name={props.name} position={props.position} />

      <Profile profilePic={props.profilePic} isDesktop />
    </HStack>
  );
};

export const NameAndPosition = (props: { position: string; name: string }) => {
  return (
    <Box w="200px">
      <Text fontWeight={"bolder"}>{props.name}</Text>
      <Text color={"#667085"}>{props.position}</Text>
    </Box>
  );
};
