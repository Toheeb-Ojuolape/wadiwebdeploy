
import { IconButton } from "@chakra-ui/react";
import { ArrowDown, ArrowUp, CloseCircle, Import, TickCircle } from "iconsax-react";
import TrashIcon from "../icons/delete";
import PenIcon from "../icons/pen";

export const CreditButton = (props: any) => {
  return <IconButton bg='rgba(209, 250, 223, 1)' size={'sm'}  ml='10px' aria-label="Credit" icon={<ArrowUp color='rgba(18, 183, 106, 1)' size="20px"  />} />;
};
export const DebitButton = (props: any) => {
  return <IconButton bg='rgba(254, 228, 226, 1)' size={'sm'} ml='10px' aria-label="Edit" icon={<ArrowDown color='rgba(240, 68, 56, 1)' size="20px"  />} />;
};
