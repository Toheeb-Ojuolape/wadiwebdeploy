import { Button, useMediaQuery } from "@chakra-ui/react";

export const ProjectDetailsButton = (props: {onClick: any,isLoading?: boolean, text: string}) => {
    
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  return (
    <Button
      fontSize="sm"
      variant="brand"
      fontWeight="500"
      w={!isMobile ? "400px": "100%"}
      h="50"
      mt='20px'
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
