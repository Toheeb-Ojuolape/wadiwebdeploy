import {
  
    Flex,

    Text,
 
    Center,
    Spacer,
    useMediaQuery,
    Box,
  } from "@chakra-ui/react";
import { ProjectsBarChart } from "./projectsBarChart";


  import { AllProjectsButton, SelectContent } from "./selectContent";

  
  const dates = ["2021", "2022", "2023", "2024", "2025"];
  const query = ["Environmental", "Social", "Economic", "All"];
  
  const tableData = [
    {
      name: "Analysis of Land use",
      size: "200 KB",
      status: "Reviewed",
      time: "09:30 AM",
      date: "12/08/2021",
      progress: 50,
    },
    {
      name: "Analysis of Houses",
      size: "200 KB",
      status: "Successful",
      time: "09:30 AM",
      date: "12/08/2021",
      progress: 100,
    },
    {
      name: "Analysis of Land use",
      size: "200 KB",
      time: "08:30 AM",
      status: "Rejected",
      date: "12/08/2021",
      progress: 0,
    },
  ];
  
  export const ProjectsStick = (props: any) => {
    return (
      <Box flexDirection={"column"} w='100%'>
        <TableHeading title="Projects" />
        <ProjectsBarChart/>
      </Box>
    );
  };
  
  const TableHeading = (props: any) => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
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
  