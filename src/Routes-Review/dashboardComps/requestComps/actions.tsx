
import { IconButton } from "@chakra-ui/react";
import { CloseCircle, Import, TickCircle } from "iconsax-react";
import TrashIcon from "../icons/delete";
import PenIcon from "../icons/pen";

export const EditButton = (props: any) => {
  return <IconButton bg='rgba(242, 249, 253, 1)' size={'sm'}  ml='10px' aria-label="Edit" icon={<PenIcon size="20px"  />} />;
};
export const DeleteButton = (props: any) => {
  return <IconButton bg='rgba(254, 228, 226, 1)' size={'sm'} ml='10px' aria-label="Edit" icon={<TrashIcon size="20px"  />} />;
};
export const ImportButton = (props: any) => {
  return <IconButton bg='rgba(209, 250, 223, 1)' size={'sm'}  ml='10px' aria-label="Edit" icon={<Import size="20px"  color="rgba(18, 183, 106, 1)" />} />;
};

export const AcceptButton = (props: any) => {
  return <IconButton bg='rgba(209, 250, 223, 1)' size={'sm'} ml='10px' aria-label="Edit" icon={<TickCircle size="20px"  color="rgba(18, 183, 106, 1)" />} />;
};
export const RejectButton = (props: any) => {
  return <IconButton bg='#FEE4E2' size={'sm'}  ml='10px' aria-label="Edit" icon={<CloseCircle size="20px"  color="rgba(240, 68, 56, 1)" />} />;
};