import { Avatar, Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { PicModal } from "./modal";
import { PenAdd } from "iconsax-react";

export const UploadProfilePic = (props: {
  setedit: any;
  preview: string;
  edit: string;
  onCrop: any;
  onClosedCrop: any;
  onBeforeFileLoad: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Avatar
        onMouseOver={() => {
          props.setedit("none");
        }}
        onMouseLeave={() => {
          props.setedit("block");
        }}
        src={props.preview}
        cursor={"pointer"}
        onClick={onOpen}
        size="xl"
      >
        <Box position={"absolute"} display={props.edit}>
          <IconButton
            bg="rgba(255, 255, 255, 0.5)"
            color="rgba(43, 95, 208, 1)"
            borderRadius={"full"}
            size={"xs"}
            aria-label="Search database"
            icon={<PenAdd size={"20px"} color="rgba(43, 95, 208, 0.7)" />}
          />
        </Box>
      </Avatar>
      <PicModal
        isOpen={isOpen}
        onClose={onClose}
        onCrop={props.onCrop}
        onClosedCrop={props.onClosedCrop}
        onBeforeFileLoad={props.onBeforeFileLoad}
      />
    </div>
  );
};
