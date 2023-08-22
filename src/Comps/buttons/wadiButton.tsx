import { Button } from "@chakra-ui/react";

export const WadiButton = (props: {
  isLoading?: boolean;
  onClick: Function;
  text: String;
}) => {
  return (
    <Button
      fontSize="sm"
      variant="brand"
      fontWeight="500"
      w="100%"
      h="50"
      mb="24px"
      bg={"rgba(43, 95, 208, 1)"}
      color="white"
      onClick={(e) => {
        props.onClick();
      }}
      fontFamily={""}
      _hover={{
        bg: "white",
        color: "rgba(43, 95, 208, 1)",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
      isLoading={props.isLoading}
    >
      {props.text}
    </Button>
  );
};
