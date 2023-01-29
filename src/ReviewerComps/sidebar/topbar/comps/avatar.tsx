import { Avatar } from "@chakra-ui/react";

export const AvatarComp = (props: any) => {
  return <Avatar size={"sm"} src={props.img} className="cursor-pointer" />;
};
