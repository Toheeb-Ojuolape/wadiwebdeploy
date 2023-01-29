import { FormLabel, Input, Select, useMediaQuery } from "@chakra-ui/react";

export const RegularInput = (props: {
  label: string;
  name: string;
  placeholder: string;
  handleChange: any;
}) => {
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  return (

    <div className="mb-3">
      <FormLabel fontWeight='normal'>{props.label}</FormLabel>
      <Input
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        w={!isMobile ? "400px": "100%"}
      />
    </div>
  );
};
