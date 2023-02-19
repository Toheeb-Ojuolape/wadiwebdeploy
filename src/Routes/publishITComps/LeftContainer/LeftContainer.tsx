import { Flex } from "@chakra-ui/react";
import { ProjectDetails } from "./projectDetails";

export const LeftContainer = (props: any) => {
  return <Flex flexWrap='wrap' padding={'20px'}>

    <ProjectDetails progressLoading={props.progressLoading} loading={props.loading} handleChange={props.handleChange} file={props.file} uploadFile={props.uploadFile} onClick={props.onClick} />
  </Flex>;
};
