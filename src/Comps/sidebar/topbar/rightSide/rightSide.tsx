
import { Avatar, Circle, HStack, Text } from "@chakra-ui/react";
import { BellIconWadi } from "../../../icon/bellIcon";
import { InfoIconWadi } from "../../../icon/infoIcon";
import { Profile } from "./profile";

export const RightSide = (props: any) => {
  return (
    <HStack spacing={'20px'} width={'350px'}>
      <BellIconWadi color className='cursor-pointer hover:bg-blue-100'  />
      <InfoIconWadi  className='cursor-pointer  hover:bg-blue-100' />
      <Avatar size={'sm'} className='cursor-pointer'/>
      <Profile name='Toheeb Ojuolape'/>
    </HStack>
  );
};
