import { Avatar, Box, Circle, HStack, Text } from "@chakra-ui/react";
import { BellIconWadi } from "../../../icon/bellIcon";
import { InfoIconWadi } from "../../../icon/infoIcon";
import { AvatarComp } from "../comps/avatar";
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
    <HStack spacing={"20px"} width={"100%"} h='fit-content'>
      <Box>
        <TopBarTag
          title={props.profession}
          color="rgba(237, 112, 45, 1)"
          bg="rgba(254, 245, 239, 1)"
        />
      </Box>

      <NotificationComps
        hasNotification={props.hasNotification}
        notifcation={props.notificationCount}
      />

      <NameAndProfession name={props.name} position={props.position} />

      <Profile profilePic={props.profilePic} />
    </HStack>
  );
};

 export const NameAndProfession = (props: { position: string;  name: string;  }) => {
  return <Box w="200px">
    <Text fontWeight={"bolder"}>{props.name}</Text>
    <Text color={"#667085"}>{props.position}</Text>
  </Box>;
}

