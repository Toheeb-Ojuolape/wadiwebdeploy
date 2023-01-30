import {
  Flex,
  Text,
  Center,
  Spacer,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { EarningLineChart } from "./earningsLineChart";
import { ProjectsBarChart } from "./projectsBarChart";

import { AllProjectsButton, SelectContent } from "./selectContent";

const dates = ["2021", "2022", "2023", "2024", "2025"];
const query = ["Environmental", "Social", "Economic", "All"];


export const Earnings = (props: any) => {
  return (
    <Box flexDirection={"column"} w="100%">
      <TableHeading title="Projects" />
      <EarningLineChart />
    </Box>
  );
};

const TableHeading = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex>
      <Center p="4">
        <Text lineHeight={"10px"} fontSize="20px" fontWeight={"extrabold"}>
          Earnings
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
        <AllProjectsButton text="All Projects" />
      </Center>
    </Flex>
  );
};
