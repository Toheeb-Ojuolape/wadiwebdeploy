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
  // Center,
  Spacer,
 
  Box,
} from "@chakra-ui/react";

import { AcceptButton, RejectButton } from "./actions";

// import { AllProjectsButton } from "./selectContent";

import { Successful, Rejected, Review, InReview, Uploaded } from "./status";

import Pagination from "react-paginate";
import { useState } from "react";

import "./paginate.css";
import { ArrowLeft3, ArrowRight3, } from "iconsax-react";
import { Progress } from "./progress";


export const ProjectComps = (props: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(6);

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
              <Th>Project Name</Th>
              <Th>Payment Plan</Th>
              <Th>Date created</Th>
              <Th>Status</Th>
              <Th>Progress</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayedData.map((data: any, index: number) => (
              <Tr key={index} className="animate__animated animate__fadeIn">
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
                  ) : data.status === "In review" ? (
                    <InReview />
                  ) : data.status === "Uploaded" ? (
                    <Uploaded />
                  ) : null}
                </Td>
                <Td>
                  <Progress percentage={data.progress} />
                </Td>
                <Td>
                  <Flex>
                    <AcceptButton />
                    <RejectButton />
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

// const TableHeading = (props: any) => {
//   return (
//     <Flex>
//       <Center p="4">
//         <Text lineHeight={"10px"} fontSize="20px" fontWeight={"extrabold"}>
//           Requests
//         </Text>
//       </Center>
//       <Spacer />
//       <Center
//         justifyContent="space-evenly"
//         w="fit-content"
//         flexWrap={"wrap"}
//         p="4"
//         flexDirection={"row"}
//       >
//         <AllProjectsButton text="All Requests" />
//       </Center>
//     </Flex>
//   );
// };
