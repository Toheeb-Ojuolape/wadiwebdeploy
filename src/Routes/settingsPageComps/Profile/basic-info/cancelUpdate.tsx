import { Button, Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { ReviewModalComps } from "../../modalComps/modalComps";

export const CancelUpdate = (props: { onCancel: any; onUpdate: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex gap={2} mt="30px">
      <Button
        w={isMobile ? "100%" : "fit-content"}
        color="rgba(43, 95, 208, 1)"
        borderColor="rgba(43, 95, 208, 1)"
        onClick={props.onCancel}
        size="sm"
        variant={"outline"}
      >
        Cancel
      </Button>{" "}
      <Button
        w={isMobile ? "100%" : "fit-content"}
        color="white"
        bg="rgba(43, 95, 208, 1)"
        onClick={onOpen}
        size="sm"
        variant={"solid"}
      >
        Update
      </Button>
      <ReviewModalComps
        isOpen={isOpen}
        onClose={onClose}
        title={"Your profile has been updated"}
        subtitle={""}
      />
    </Flex>
  );
};
