import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Text,
  Tr,
  Center,
  Spacer,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import {
  DeleteButton,
  EditButton,
  ImportButton,
} from "../dashboardComps/myProjectsComps/actions";
import { Progress } from "../dashboardComps/myProjectsComps/progress";

import {
  Rejected,
  Review,
  Successful,
} from "../dashboardComps/myProjectsComps/status";
import { HeadTab } from "./headTab";
import { AllProjectsComps } from "./projectPageComps/AllProjects";

const tableData = [
  {
    name: "Analysis of Land use",
    size: "200 KB",
    paymentPlan: "Regular",
    status: "Reviewed",
    time: "09:30 AM",
    date: "12/08/2021",
    progress: 50,
  },
  {
    name: "Analysis of Houses",
    size: "200 KB",
    paymentPlan: "Express",
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
    paymentPlan: "Express",
    date: "12/08/2021",
    progress: 0,
  },
];

const tabList = [
  { text: "All" },
  { text: "Review" },
  { text: "Rejected " },
  { text: "Completed" },
];

export const ManageProjects = (props: any) => {
  return (
    <Flex flexDirection={"row"} className="animate__animated animate__fadeIn">
      <Box padding={"20px"} width={"100vw"} flexDirection={"column"}>
        <TableHeading />
        <AllProjectsComps />
      </Box>
    </Flex>
  );
};

const TableHeading = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex>
      <Center p="4"></Center>
      <Spacer />
      <Center
        justifyContent="space-evenly"
        w="fit-content"
        flexWrap={"wrap"}
        p="4"
        flexDirection={"row"}
      >
        <Button bg="rgba(43, 95, 208, 1)" color={"white"} fontSize={"14px"}>
          Create Project
        </Button>
      </Center>
    </Flex>
  );
};
