import { FormLabel, Input, useMediaQuery } from "@chakra-ui/react";

export const InputComps = (props: {
  value: string;
  type: string;
  label: string;
  name: string;
  onChange: any;
  readonly:boolean
}) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <FormLabel
        display="flex"
        ms="0px"
        marginBottom={"0px"}
        fontSize="sm"
        fontWeight="500"
        mb="px"
      >
       {props.label}
      </FormLabel>
      <Input
        w={!isMobile ? "400px" : "100%"}
        onChange={props.onChange}
        name={props.name}
        variant="filled"
        value={props.value}
        placeholder={props.value}
        type={props.type}
        mb='10px'
        readOnly={props.readonly}
      />
    </>
  );
};
