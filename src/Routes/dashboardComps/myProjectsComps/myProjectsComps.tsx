import {
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
  Box,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";

import { DeleteButton, EditButton, ImportButton } from "./actions";
import { tableDataList } from "./dataTest";
import { Progress } from "./progress";
import { AllProjectsButton, SelectContent } from "./selectContent";

import "./paginate.css";
import { Link } from "react-router-dom";

const dates = ["2021", "2022", "2023", "2024", "2025"];
const query = [
  "All",
  "Biology",
  "Chemistry",
  "Economic",
  "Energy",
  "Environmental",
  "Geology",
  "Physics",
];

export const MyProjectComps = (props: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(6);
  const [data] = useState(tableDataList);

  const handlePageChange = (page: any) => {
    setCurrentPage(page.selected);
  };

  interface Project {
    author: string;
    title: string;
    date: any;
    field: string;
    file: string;
    journal: string;
    status: string;
    timestamp: number;
  }

  const sliceStart = currentPage * perPage;
  const sliceEnd = sliceStart + perPage;

  const displayedData = props.projectData? props.projectData.slice(sliceStart, sliceEnd) : null;
  return (
    <Flex flexDirection={"column"} flexWrap="wrap">
      <TableHeading title="Projects" />
      {props.projectData ? <TableContainer minH={"350px"}>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Status</Th>
              <Th>Date created</Th>
              <Th>Progress</Th>
              <Th textAlign={"right"}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayedData &&
              displayedData.map((data: any, index: Number) => (
                <Tr>
                  <Td w={"200px"}>
                    <Flex flexDirection={"column"}>
                      <Text>{data.title}</Text>
                      <Text>{data.size}</Text>
                    </Flex>
                  </Td>

                  <Td>
                    <div className={data.status.replaceAll(" ", "-")}>
                      {data.status}
                    </div>
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
                      <EditButton slug={data.slug} />
                      {data.status === "Successful" ? (
                        <ImportButton />
                      ) : (
                        <DeleteButton />
                      )}
                    </Flex>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer> :  <Box  minH={"350px"} width={'100%'}>
            <Skeleton mt='10px' height="80px" />
          </Box>}
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
        <Link to="/dashboard/publish/my-projects">
          <AllProjectsButton text="All Projects" />
        </Link>
      </Center>
    </Flex>
  );
};
