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

  Box,
} from "@chakra-ui/react";



import Pagination from "react-paginate";
import { useState } from "react";

import "./paginate.css";
import { ArrowLeft3, ArrowRight3, Briefcase } from "iconsax-react";

import { Credit, Debit } from "./activity";
import { CreditButton, DebitButton } from "./statusComps";

export const TransComps = (props: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(6);

  const handlePageChange = (page: any) => {
    setCurrentPage(page.selected);
  };

  const sliceStart = currentPage * perPage;
  const sliceEnd = sliceStart + perPage;
  const displayedData = props.data.slice(sliceStart, sliceEnd);

  return (
    <Flex flexDirection={"column"} flexWrap="wrap" mt="10px">
      <TableContainer minH={"350px"}>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Reference</Th>
              <Th>Activity</Th>
              <Th>Narration</Th>
              <Th>Date created</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayedData.map((data: any, index: number) => (
              <Tr className="animate__animated animate__fadeIn">
                <Td w={"200px"}>
                  <Flex flexDirection={"column"}>
                    <Text>{data.name}</Text>
                  </Flex>
                </Td>
                <Td>
                  {data.activity === "Credit" ? (
                    <Credit />
                  ) : data.activity === "Debit" ? (
                    <Debit />
                  ) : null}
                </Td>

                <Td>
                  <Flex flexDirection={"column"}>
                    <Text>{data.plan}</Text>
                    <Text color={"rgba(102, 112, 133, 1)"}>
                      {data.narration}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex flexDirection={"column"}>
                    <Text>{data.date}</Text>
                    <Text color={"rgba(102, 112, 133, 1)"}>{data.time}</Text>
                  </Flex>
                </Td>

                <Td>
                  <Text>{data.amount}</Text>
                </Td>
                <Td>
                  <Flex>
                    {data.activity === "Credit" ? (
                      <CreditButton />
                    ) : data.activity === "Debit" ? (
                      <DebitButton />
                    ) : null}
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Spacer />
      <Box mt="20px" maxW="100%">
        <Pagination
          previousLabel={<ArrowLeft3 />}
          nextLabel={<ArrowRight3 />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={props.data.length / perPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </Box>
    </Flex>
  );
};


