import { Button, FormLabel, Select, useMediaQuery } from "@chakra-ui/react";

export const SelectContent = (props: {
  options: any;
  label: any;
  defaultValue: any;
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
      <Select
        mb="10px"
        variant={"filled"}
        fontSize={"13px"}
        w={!isMobile ? "400px" : "100%"}
        size={isMobile ? "sm" : "md"}
        defaultValue={props.defaultValue}
      >
        {props.options.map((option: any, key: number) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </>
  );
};
