import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Flex
   
  } from "@chakra-ui/react";
  import { useRef} from "react";
 

  
  const AreYouSureModal = (props: any) => {
    const finalRef = useRef(null);
  
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

            <ModalHeader>{props.title}</ModalHeader>

            <ModalBody>
                {props.description}
            </ModalBody>
  
            <ModalFooter width={"100%"}>
              <Flex justifyContent={"space-between"}>
                <Button isLoading={props.loading} onClick={props.delete} background={"red.500"} className="text-white mr-4">Yes, DELETE</Button> <Button variant={"link"} onClick={props.onClose}>No, don't delete</Button>
              </Flex>
            </ModalFooter>

          </ModalContent>
        </Modal>
      </>
    );
  };
  

  export default AreYouSureModal