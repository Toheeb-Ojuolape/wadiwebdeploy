import { AddIcon } from "@chakra-ui/icons";
import { Button, useDisclosure } from "@chakra-ui/react";

import { ModalComps } from "../../modalComps/modalComps";

export const CreateNewButton = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Button
      marginLeft={"20px"}
      mb="20px"
      fontWeight={"light"}
      fontSize="12px"
      leftIcon={<AddIcon fontSize={"10px"} />}
      bg="rgba(43, 95, 208, 1)"
      color={"white"}
      w="120px"
      variant="solid"
      onClick={onOpen}

    >
      Create New
    </Button>
    <ModalComps isOpen = {isOpen} onClose = {onClose} onOpen = {onOpen} />
    </>
  );
};
