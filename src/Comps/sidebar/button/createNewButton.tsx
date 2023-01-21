import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export const CreateNewButton = (props: any) => {
  return (
    <Button marginLeft={'20px'} mb='20px' fontWeight={'light'} fontSize='12px' leftIcon={<AddIcon fontSize={'10px'}/>} bg="rgba(43, 95, 208, 1)" color={'white'} w ='120px' variant="solid">
      Create New
    </Button>
  );
};
