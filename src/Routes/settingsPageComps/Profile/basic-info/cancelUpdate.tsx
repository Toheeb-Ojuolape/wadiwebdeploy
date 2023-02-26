import { Button, Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { ReviewModalComps } from "../../modalComps/modalComps";

export const CancelUpdate = (props: { onCancel: any; onUpdate: any,updateProfile:any,loading:boolean}) => {
  const { isOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  const updateProfile = () =>{
    props.updateProfile()
    
  }

 
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
        onClick={updateProfile}
        size="sm"
        variant={"solid"}
        isLoading={props.loading}
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
