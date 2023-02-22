import {
 
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,

  ModalOverlay,
 
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { WadiButton } from "../buttons/wadiButton";
import { ModalBodyComponent } from "./modalBody";
import { ModelBodyNewProject } from "./modalBodyNewProject";
import { useNavigate } from "react-router-dom";

export const ModalComps = (props: any) => {
  const finalRef = useRef(null);
  const history = useNavigate()
  const [radio, setRadio] = useState("1");
  const [moveNext, setMoveNext] = useState({
    pag1: false,
    pag2: false,
    pag3: false,
  });

  const goBack = () =>{
    setMoveNext({ ...moveNext, pag1: false });
  }


  const addNewProject = () =>{
    history("/dashboard/publish/new-project")
    props.onClose()
  }

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
            {moveNext.pag1 ? <ModelBodyNewProject goBack={goBack} /> : null}
          </ModalBody>

          <ModalFooter>
            <WadiButton
              text="Next"
              onClick={() => {
                if (radio === "1" && moveNext.pag1 === false) {
                  setMoveNext({ ...moveNext, pag1: true });
                } else if (radio === "2") {
                  setMoveNext({ ...moveNext, pag2: true });
                  console.log(moveNext)
                } else if(radio === "1" && moveNext.pag1 === true){
                  addNewProject()
                }

                else if(radio === "2" && moveNext.pag1 === true){
                  addNewProject()
                  
                }
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
