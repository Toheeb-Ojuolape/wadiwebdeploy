import { Button } from "@chakra-ui/react";

function PrimaryButton(props:{children:any,onClick:Function}) {
  return (
    <Button
      variant={"solid"}
      _hover={{ background: "#0C60D8" }}
      color="white"
      width={"100%"}
      background="#0C60D8"
      onClick={()=>props.onClick()}
    >
    {props.children}
    </Button>
  );
}

export default PrimaryButton;
