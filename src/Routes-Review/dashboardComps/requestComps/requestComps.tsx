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
} from "@chakra-ui/react";

import { AcceptButton, RejectButton } from "./actions";

import { AllProjectsButton } from "./selectContent";
import { Successful, Rejected, Review, Pending } from "./status";

const tableData = [
  {
    name: "Analysis of Land use",
    size: "200 KB",
    status: "Pending",
    time: "09:30 AM",
    date: "12/08/2021",
    plan: "Regular",
    price: "NGN50,000",
  },
];
//create a list conatining 100 tabaleDatas
const tableDataList: any = [];
for (let i = 0; i < 10; i++) {
  tableDataList.push(tableData[0]);
}

export const RequestComps = (props: any) => {
  return (
    <Flex flexDirection={"column"} flexWrap="wrap">
      <TableHeading title="Requests" />
      <div className="overflow-scroll max-h-[500px] w-full">
        <TableContainer>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Project Name</Th>
                <Th>Payment Plan</Th>
                <Th>Date created</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableDataList.map((data: any, index: number) => (
                <Tr>
                  <Td w={"200px"}>
                    <Flex flexDirection={"column"}>
                      <Text>{data.name}</Text>
                      <Text>{data.size}</Text>
                    </Flex>
                  </Td>

                  <Td w={"200px"}>
                    <Flex flexDirection={"column"}>
                      <Text>{data.plan}</Text>
                      <Text color={"rgba(102, 112, 133, 1)"}>{data.price}</Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex flexDirection={"column"}>
                      <Text>{data.date}</Text>
                      <Text color={"rgba(102, 112, 133, 1)"}>{data.time}</Text>
                    </Flex>
                  </Td>
                  <Td>
                    {data.status === "Successful" ? (
                      <Successful />
                    ) : data.status === "Rejected" ? (
                      <Rejected />
                    ) : data.status === "Reviewed" ? (
                      <Review />
                    ) : data.status === "Pending" ? (
                      <Pending />
                    ) : null}
                  </Td>
                  <Td>
                    <Flex justifyContent="space-between">
                      <AcceptButton />
                      <RejectButton />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Flex>
  );
};

const TableHeading = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex>
      <Center p="4">
        <Text lineHeight={"10px"} fontSize="20px" fontWeight={"extrabold"}>
          Requests
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
        <AllProjectsButton text="All Requests" />
      </Center>
    </Flex>
  );
};
