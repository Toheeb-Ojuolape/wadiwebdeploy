import { BellIcon, InfoIcon } from "@chakra-ui/icons";
import { Avatar, Circle, HStack, Text } from "@chakra-ui/react";

export const RightSide = (props: any) => {
  return (
    <HStack>
      <BellIcon color={"black"} />
      <InfoIcon color={"black"} />
      <Avatar />
      <Text>{props.name}</Text>
    </HStack>
  );
};
