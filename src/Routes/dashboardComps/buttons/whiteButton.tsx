import { Button } from "@chakra-ui/react";

export const WhiteButton = (props: any) => {
  return (
    <Button bg={"white"} size='md' _hover={{background:"black"}} variant="solid" color={'rgba(86, 128, 220, 1)'}>
      {props.text}
    </Button>
  );
};
