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
  { text: "All", },
  { text: "Review" },
  { text: "Rejected " },
  { text: "Completed" },
];

export const ManageProjects = (props: any) => {
  return (
    <Flex flexDirection={"row"}>
      <Box padding={"20px"} width={"100vw"} flexDirection={"column"}>
        <TableHeading />
        <Flex
          flexDirection={"column"}
          flexWrap="wrap"
          w="100%"
          bg="white"
          padding="20px"
          borderRadius={"md"}
        >
          <Flex>
            {tabList.map((text, index) => {
              return (
                <HeadTab {...text} key={index} name={(index).toString()} index={index} onClick={props.onclick} />
              );
            })}
          </Flex>
          <TableContainer>
            <Table size="sm" variant="simple">
              <Thead>
                <Tr>
                  <Th>Project Name</Th>
                  <Th>Payment Plan</Th>
                  <Th>Status</Th>
                  <Th>Date created</Th>
                  <Th  textAlign={'center'}>Progress</Th>
                  <Th textAlign={'right'}>Actions</Th>
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

                    <Td w={"200px"}>
                      <Text>{data.paymentPlan}</Text>
                    </Td>
                    <Td>
                      {data.status === "Successful" ? (
                        <Successful />
                      ) : data.status === "Rejected" ? (
                        <Rejected />
                      ) : (
                        <Review />
                      )}
                    </Td>
                    <Td>
                      <Flex flexDirection={"column"}>
                        <Text>{data.date}</Text>
                        <Text color={"rgba(102, 112, 133, 1)"}>
                          {data.time}
                        </Text>
                      </Flex>
                    </Td>
                    <Td>
                      <Progress percentage={data.progress} />
                    </Td>
                    <Td>
                      <Flex justifyContent="space-between">
                        <Spacer />
                        <EditButton />
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
          </TableContainer>
        </Flex>
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
