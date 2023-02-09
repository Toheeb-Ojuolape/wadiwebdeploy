import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useRef, useState } from "react";
import { JsxElement } from "typescript";
import { ModalBodyComp } from "./modalBody";

export const ReviewModalComps = (props: {
  isOpen: any;
  onClose: any;
  title: string;
  subtitle: string;
}) => {
  const finalRef = useRef(null);

  return (
    <>
      <Modal
      
        finalFocusRef={finalRef}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius={"3xl"} ml='10px' mr='10px'>
          <ModalCloseButton />
          <ModalBody>
            <ModalBodyComp
              onClose={props.onClose}
              title={props.title}
              subtitle={props.subtitle}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
