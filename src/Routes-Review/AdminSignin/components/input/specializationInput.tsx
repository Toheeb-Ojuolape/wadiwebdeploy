import { FormLabel, Select } from "@chakra-ui/react";

import { upperFirst } from "lodash";


export const SpecializationInput = (props: any) => {
  const spec = ['Lecturer', 'Non Lecturer']

  
  return (
    <div  className="mb-6">
      <FormLabel>What is your specialization?</FormLabel>
      <Select name="specialization" placeholder="Choose" onChange={props.handleChange}>
        {spec.map((spec, index) => {
          return <option key={index}>{upperFirst(spec)}</option>;
        })}
      </Select>
    </div>
  );
};
