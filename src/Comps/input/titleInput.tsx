import { FormLabel, Input, Select } from "@chakra-ui/react";

import { upperFirst } from "lodash";


export const TitleInput = (props: any) => {
  

  
  return (
    <div  className="mb-6">
      <FormLabel>What is your title?</FormLabel>
      <Input
          name="title"
          isRequired={true}
          variant="auth"
          value={props.value}
          border={"1px solid rgba(101, 108, 117, 0.37)"}
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="Evironmental Sciences"
          mb="24px"
          fontWeight="500"
          onChange={props.handleChange}
          _active={{ bg: "rgba(101, 108, 117, 0.37)" }}
        />
    </div>
  );
};
