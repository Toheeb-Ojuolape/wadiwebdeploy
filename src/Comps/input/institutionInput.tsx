import { FormLabel, Select } from "@chakra-ui/react";

import { upperFirst } from "lodash";

import { institutionsNames } from "./institutions";

export const InstitutionInput = (props: any) => {


  
  return (
    <div  className="mb-6">
      <FormLabel>Your Institution</FormLabel>
      <Select name="institution" placeholder="FUTA,UniLag" onChange={props.handleChange}>
        {institutionsNames.map((institution, index) => {
          return <option key={index}>{upperFirst(institution)}</option>;
        })}
      </Select>
    </div>
  );
};
