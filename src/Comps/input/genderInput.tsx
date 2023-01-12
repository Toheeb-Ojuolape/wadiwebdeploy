import { FormLabel, Select } from "@chakra-ui/react";
import countries from "country-list";
import { upperFirst } from "lodash";
import { useState } from "react";

export const GenderInput = (props: any) => {
  const gender = ['Male', 'Female']

  
  return (
    <div  className="mb-6">
      <FormLabel>What do you identify as?</FormLabel>
      <Select placeholder="Select gender" onChange={(e)=>{console.log(e.target.value)}}>
        {gender.map((gender, index) => {
          return <option key={index}>{upperFirst(gender)}</option>;
        })}
      </Select>
    </div>
  );
};
