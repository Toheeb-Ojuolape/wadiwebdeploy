import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { institutionsNames } from "../../../../../Comps/input/institutions";

import { GoBackto } from "../../goBackto";
import { CancelUpdate } from "./cancelUpdate";
import { SelectContent } from "./selectContent";

export const ProfInfo = (props: {
  defaultSpecialization: string;
  defaultInstitution: string;
  defaultTitle: string;
  onCancel: string
}) => {


  return (
    <Flex flexDirection={"column"}>
      <Box w="fit-content">
        <GoBackto name="Professional information" />
      </Box>
      <Box mt='30px'>
      <SelectContent
        options={institutionsNames}
        label={"Your Institution"}
        defaultValue={props.defaultInstitution}
      />{" "}
      <SelectContent
        options={["Lecturer", "Professor", "Student", "Other"]}
        label={"What is your specialization?"}
        defaultValue={props.defaultSpecialization}
      />
      <SelectContent
        options={["Environmental Sciences", "Computer Science", "Other"]}
        label={"What is your title?"}
        defaultValue={props.defaultTitle}
      />
      <CancelUpdate onCancel={props.onCancel} />
      </Box>
    </Flex>
  );
};
