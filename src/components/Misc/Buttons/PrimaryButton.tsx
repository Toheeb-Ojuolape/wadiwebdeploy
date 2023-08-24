import { Button } from "@chakra-ui/react";

function PrimaryButton(props:{children:any,onClick:Function,loading:boolean}) {
  return (
    <Button
      variant={"solid"}
      _hover={{ background: "#0C60D8" }}
      color="white"
      width={"100%"}
      background="#0C60D8"
      onClick={()=>props.onClick()}
      height={"50px"}
      isLoading={props.loading}
    >
    {props.children}
    </Button>
  );
}

export default PrimaryButton;
