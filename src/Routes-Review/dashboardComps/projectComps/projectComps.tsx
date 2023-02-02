import { Flex, Text, Center, Spacer, Box } from "@chakra-ui/react";
import { ProjectsBarChart } from "./projectsBarChart";

import { AllProjectsButton, SelectContent } from "./selectContent";

const dates = ["2021", "2022", "2023", "2024", "2025"];
const query = ["Environmental", "Social", "Economic", "All"];

export const ProjectsStick = (props: any) => {
  return (
    <Box flexDirection={"column"} w="100%">
      <TableHeading title="Projects" />
      <ProjectsBarChart />
    </Box>
  );
};

const TableHeading = (props: any) => {
  return (
    <Flex>
      <Center p="4">
        <Text lineHeight={"10px"} fontSize="20px" fontWeight={"extrabold"}>
          Projects
        </Text>
      </Center>
      <Spacer />
      <Center
        justifyContent="space-evenly"
        w="fit-content"
        flexWrap={"wrap"}
        p="4"
        flexDirection={"row"}
      >
        <SelectContent placeholder={dates[0]} options={dates} />
        <SelectContent placeholder={query[0]} options={query} />
        <AllProjectsButton text="All Projects" />
      </Center>
    </Flex>
  );
};
