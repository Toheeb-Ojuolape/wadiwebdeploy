import { Box, FormControl, Text,Progress } from "@chakra-ui/react";
import ManuScript from "./manuScriptUpload";

import { RegularInput } from "./regurlarInput";
import { SelectInput } from "./selectInput";



import {

  ListItem,

  UnorderedList,
} from "@chakra-ui/react";

import { ProjectDetailsButton } from "./projectDetailsButton";
const researchList = ["Art","Energy","Engineering","Environment","Geoscience","History","Humanities","Medicine","Politics","Programming","Social Science","Scholarships","Science","Space","Technology"];
const projectType = ["Choose Type","Convert Dissertation to Manuscript", "Review Research"];

export const ProjectDetails = (props: any) => {

  return (
    <Box flexWrap="wrap">
      <Text fontWeight={"extrabold"} fontSize="18px">
        Project Details
      </Text>
      <Text fontSize={"14px"}>
      Enter the details of your project
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
          label={"Select Type"}
          name={"projectType"}
          handleChange={props.handleChange}
          optionList={projectType}
        />
        <ManuScript file={props.file} uploadFile={props.uploadFile} />
        
        
        <div className="flex"><Progress value={props.progressLoading} width={"380px"}/><p className="text-sm ml-2">{props.progressLoading} %</p></div>
        
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
              Ensure that your name is taken off from your manuscript for
               unbiased reviews.
            </ListItem>
          </UnorderedList>
        </Box>
     
        <ProjectDetailsButton isLoading={props.loading} text='Next' onClick={props.onClick}/>
      </FormControl>
    </Box>
  );
};
