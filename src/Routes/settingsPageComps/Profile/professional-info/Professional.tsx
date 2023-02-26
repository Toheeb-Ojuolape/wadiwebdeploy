import { Box, Flex, Input, FormLabel } from "@chakra-ui/react";
import { institutionsNames } from "../../../../Comps/input/institutions";

import { GoBackto } from "../../goBackto";
import { CancelUpdate } from "./cancelUpdate";
import { SelectContent } from "./selectContent";

export const ProfInfo = (props: {
  defaultSpecialization: string;
  defaultInstitution: string;
  defaultTitle: string;
  onCancel: any;
  loading:boolean;
  updateProfile:any;
  onUpdate:any
}) => {
  return (
    <Flex flexDirection={"column"}>
      <Box w="fit-content">
        <GoBackto name="Professional information" />
      </Box>
      <Box mt="30px">
        <SelectContent
          options={institutionsNames}
          label={"Your Institution"}
          defaultValue={props.defaultInstitution}
        />{" "}
        <FormLabel
          display="flex"
          ms="0px"
          marginBottom={"0px"}
          fontSize="sm"
          fontWeight="500"
          mb="px"
        >
          What is your specialization?
        </FormLabel>
        <div>
          <Input
            maxWidth={"400px"}
            defaultValue={props.defaultSpecialization}
          />
        </div>
        <FormLabel
          display="flex"
          ms="0px"
          marginBottom={"0px"}
          fontSize="sm"
          fontWeight="500"
          mb="px"
        >
          Title
        </FormLabel>
        <div>
          <Input maxWidth={"400px"} defaultValue={props.defaultTitle} />
        </div>
        <CancelUpdate
          loading={props.loading}
          updateProfile={props.updateProfile}
          onCancel={props.onCancel}
          onUpdate={props.onUpdate}
        />
      </Box>
    </Flex>
  );
};
