import { Flex } from "@chakra-ui/react";
import { ProjectDetails } from "./projectDetails";

export const LeftContainer = (props: any) => {
  return <Flex flexWrap='wrap' padding={'20px'}>

    <ProjectDetails file={props.file} uploadFile={props.uploadFile} onClick={props.onClick} />
  </Flex>;
};
