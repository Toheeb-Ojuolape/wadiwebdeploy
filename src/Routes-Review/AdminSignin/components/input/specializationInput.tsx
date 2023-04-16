import { FormLabel, Select } from "@chakra-ui/react";
import specialization from "../../../../Data/specializations.json"
export const SpecializationInput = (props: any) => {
  return (
    <div className="mb-5">
      <FormLabel>What is your specialization?</FormLabel>
      <Select
        name="specialization"
        placeholder="Choose"
        onChange={props.handleChange}
      >
        {specialization.map((specialization,index)=>(
          <option key={index} value={specialization.value}>{specialization.name}</option>
        ))}
        
      </Select>
    </div>
  );
};
