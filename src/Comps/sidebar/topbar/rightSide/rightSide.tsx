import { Avatar, Box, Circle, HStack, Text } from "@chakra-ui/react";
import { BellIconWadi } from "../../../icon/bellIcon";
import { InfoIconWadi } from "../../../icon/infoIcon";
import { AvatarComp } from "../comps/avatar";
import { Profile } from "./profile";
import { TopBarTag } from "./topBarTag";

export const RightSide = (props: any) => {
  return (
    <HStack spacing={"20px"} width={"350px"}>
      <Box>
        <TopBarTag
          title="Researcher"
          color="rgba(237, 112, 45, 1)"
          bg="rgba(254, 245, 239, 1)"
        />
      </Box>

      <Box w="200px">
        <Text>{props.name}</Text>
        <Text>{props.position}</Text>
      </Box>

      <Profile />
    </HStack>
  );
};
