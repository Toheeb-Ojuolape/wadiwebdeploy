import { Box, Flex } from "@chakra-ui/react";
import { AllProjectsComps } from "../dashboardComps/projectPageComps/AllProjects";

export const AllProjects = (props: any) => {
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        <AllProjectsComps />
      </Box>
    </Flex>
  );
};
