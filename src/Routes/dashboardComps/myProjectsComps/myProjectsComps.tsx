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
} from "@chakra-ui/react";
import { Completed, Rejected, Review } from "./status";

export const MyProjectComps = (props: any) => {
  return (
    <TableContainer className="bg-red-300 p-4">
      <Table size="sm" variant="simple">
       
        <Thead>
          <Tr>
            <Th>Project Name</Th>
            <Th>Date Created</Th>
            <Th>Status</Th>
            <Th>Progress</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td w={"200px"}>
              <Flex flexDirection={"column"}>
                <Text>Analysis of Land use and Land Cover Changes...</Text>
                <Text>200 KB</Text>
              </Flex>
            </Td>
            <Td>Jan 4, 2023, 9:45 AM</Td>
            <Td>
              <Review />
            </Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>{" "}
          <Tr>
            <Td w={"200px"}>
              <Flex flexDirection={"column"}>
                <Text>Analysis of Land use and Land Cover Changes...</Text>
                <Text>200 KB</Text>
              </Flex>
            </Td>
            <Td>Jan 4, 2023, 9:45 AM</Td>
            <Td>
              <Rejected />
            </Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>{" "}
          <Tr>
            <Td w={"200px"}>
              <Flex flexDirection={"column"}>
                <Text>Analysis of Land use and Land Cover Changes...</Text>
                <Text>200 KB</Text>
              </Flex>
            </Td>
            <Td>Jan 4, 2023, 9:45 AM</Td>
            <Td>
              <Completed />
            </Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
