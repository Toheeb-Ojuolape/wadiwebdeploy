import { FormLabel, Select, useMediaQuery } from "@chakra-ui/react";



export const SelectInput = (props: {
  label: string;
  name: string;
  handleChange: any;
  optionList: string[];
}) => {
  const [isMobile] = useMediaQuery("(max-width: 850px)");

  return (
    <div className="mb-3">
      <FormLabel fontWeight={'normal'}>{props.label}</FormLabel>
      <Select name={props.name} onChange={props.handleChange} w={!isMobile ? "400px": "100%"}>
        {props.optionList.map((data, index) => {
          return <option key={index}>{data}</option>;
        })}
      </Select>
    </div>
  );
};
