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
import { useRef, useState } from "react";
import { WadiButton } from "../buttons/wadiButton";
import { ModalBodyComponent } from "./modalBody";
import { ModelBodyNewProject } from "./modalBodyNewProject";

export const ModalComps = (props: any) => {
  const finalRef = useRef(null);
  const [radio, setRadio] = useState("1");
  const [moveNext, setMoveNext] = useState({
    pag1: false,
    pag2: false,
    pag3: false,
  });

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius={"3xl"} ml="10px" mr="10px">
          <ModalCloseButton />
          <ModalBody>
            {moveNext.pag1 || moveNext.pag2 || moveNext.pag3 ? null : (
              <ModalBodyComponent setRadio={setRadio} />
            )}
            {moveNext.pag1 ? <ModelBodyNewProject /> : null}
          </ModalBody>

          <ModalFooter>
            <WadiButton
              text="Next"
              onClick={() => {
                if (radio === "1") {
                  setMoveNext({ ...moveNext, pag1: true });
                } else if (radio === "2") {
                  setMoveNext({ ...moveNext, pag2: true });
                } else {
                  alert("ahn ahn")
                }
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
