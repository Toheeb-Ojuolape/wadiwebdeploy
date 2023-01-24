import { Box, Button, FormControl, Text } from "@chakra-ui/react";
import ManuScript from "./manuScriptUpload";

import { RegularInput } from "./regurlarInput";
import { SelectInput } from "./selectInput";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { WadiButton } from "../../../Comps/buttons/wadiButton";
import { ProjectDetailsButton } from "./projectDetailsButton";
const researchList = ["Environmental Management", "Social science", "Data "];
const paymentList = ["Monthly", "Yearly", "Quarterly"];

export const ProjectDetails = (props: any) => {
  return (
    <Box flexWrap="wrap">
      <Text fontWeight={"extrabold"} fontSize="18px">
        Project Details
      </Text>
      <Text fontSize={"14px"}>
        Lorem ipsum dolor sit amet consectetur. Vestibulum turpis mi volutpat
        commodo amet.
      </Text>
      <FormControl mt="30px">
        <RegularInput
          label="Enter manuscript title"
          name="manuscriptTitle"
          placeholder="Title"
          handleChange={props.handleChange}
        />
        <SelectInput
          label={"Select research field"}
          name={"researchField"}
          handleChange={props.handleChange}
          optionList={researchList}
        />
        <RegularInput
          label="Name of Journal"
          name="nameofJournal"
          placeholder="e.g Journal of Geographical Sciences"
          handleChange={props.handleChange}
        />
        <SelectInput
          label={"Select payment plan"}
          name={"paymentPlan"}
          handleChange={props.handleChange}
          optionList={paymentList}
        />
        <ManuScript file={props.file} uploadFile={props.uploadFile} />
        <Box mt="20px">
          <Text
            mb="10px"
            fontSize={"12px"}
            color={"rgba(101, 108, 117, 1)"}
            fontWeight="extrabold"
          >
            Requirement
          </Text>
          <UnorderedList fontSize={"13px"} color="rgba(102, 112, 133, 1)">
            <ListItem>The file must be a docx format</ListItem>
            <ListItem>
              Ensure that your name is taken off from your manuscript to
              emphasise unbiased reviews.
            </ListItem>
          </UnorderedList>
        </Box>
     
        <ProjectDetailsButton text='Next' onClick={props.onClick}/>
      </FormControl>
    </Box>
  );
};
