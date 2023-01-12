import { FormLabel, Select } from "@chakra-ui/react";

import { upperFirst } from "lodash";


export const GenderInput = (props: any) => {
  const gender = ['Male', 'Female']

  
  return (
    <div  className="mb-6">
      <FormLabel>What do you identify as?</FormLabel>
      <Select name="gender" placeholder="Select gender" onChange={props.handleChange}>
        {gender.map((gender, index) => {
          return <option key={index}>{upperFirst(gender)}</option>;
        })}
      </Select>
    </div>
  );
};
