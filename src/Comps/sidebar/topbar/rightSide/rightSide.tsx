
import { Avatar, Circle, HStack, Text } from "@chakra-ui/react";
import { BellIconWadi } from "../../../icon/bellIcon";
import { InfoIconWadi } from "../../../icon/infoIcon";
import { Profile } from "./profile";

export const RightSide = (props: any) => {
  return (
    <HStack spacing={'20px'} width={'350px'}>
      <BellIconWadi color={"black"} />
      <InfoIconWadi color={"black"} />
      <Avatar size={'sm'}/>
      <Profile name='Toheeb Ojuolape'/>
    </HStack>
  );
};
