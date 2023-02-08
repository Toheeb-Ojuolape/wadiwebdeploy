import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import { WadiButton } from "../../../../../ReviewerComps/buttons/wadiButton";
import { ImageCrop } from "./imageCrop";

export const PicModal = (props: {
  isOpen: any;
  onClose: any;
  onCrop: any;
  onClosedCrop: any;
  onBeforeFileLoad: any;
}) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent w={"fit-content"}>
        <ModalBody>
          <ImageCrop
            onCrop={props.onCrop}
            onClosedCrop={props.onClosedCrop}
            onBeforeFileLoad={props.onBeforeFileLoad}
          />
          <Box mt='20px'>
          <WadiButton onClick={props.onClose} text='Crop Image'/></Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
