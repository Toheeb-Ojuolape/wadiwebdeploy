import {
  Box,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Text,
  Tr,
  Select,
  Center,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { WadiButton } from "../../../Comps/buttons/wadiButton";
import { DeleteButton, EditButton, ImportButton } from "./actions";
import { Progress } from "./progress";
import { AllProjectsButton, SelectContent } from "./selectContent";
import { Successful, Rejected, Review } from "./status";

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

export const MyProjectComps = (props: any) => {
  return (
    <Flex flexDirection={"column"} flexWrap="wrap">
      <TableHeading title="Projects" />
      <TableContainer>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Status</Th>
              <Th>Date created</Th>
              <Th>Progress</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            
            {tableData.map((data, index) => (
              <Tr>
                <Td w={"200px"}>
                  <Flex flexDirection={"column"}>
                    <Text>{data.name}</Text>
                    <Text>{data.size}</Text>
                  </Flex>
                </Td>

                <Td>
                  {data.status === "Successful" ? <Successful/>: data.status === "Rejected"? <Rejected/> :<Review />}
                </Td>
                <Td>
                  <Flex flexDirection={"column"}>
                    <Text>{data.date}</Text>
                    <Text color={"rgba(102, 112, 133, 1)"}>{data.time}</Text>
                  </Flex>
                </Td>
                <Td>
                  <Progress percentage={data.progress} />
                </Td>
                <Td>
                  <Flex justifyContent="space-between">
                    <EditButton />
                    {data.status==="Successful" ?<ImportButton />:  <DeleteButton/>}
                  </Flex>
                </Td>
              </Tr>))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
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
