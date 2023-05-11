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
  Spacer
} from "@chakra-ui/react";

import { AcceptButton, RejectButton } from "./actions";

import { AllProjectsButton } from "./selectContent";

import { Successful, Rejected, Review, Pending, Uploaded } from "./status";
import './paginate.css'
import { Link } from "react-router-dom";

export const RequestComps = (props: any) => {
  return (
    <Flex flexDirection={"column"} flexWrap="wrap">
      <TableHeading title="Requests" />
     
        <TableContainer minH={'350px'}>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Type</Th>
                <Th>Date created</Th>
                <Th>Price</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.projects && props.projects.map((data: any, index: number) => (
                <Tr key={index}>
                  <Td w={"200px"}>
                    <Flex flexDirection={"column"}>
                      <Text>{data.title.length > 20 ? data.title.slice(0,19)+"...":data.title}</Text>
                     
                    </Flex>
                  </Td>

                  <Td w={"200px"}>
                    <Flex flexDirection={"column"}>
                      <Text>{data.type}</Text>
                      {/* <Text color={"rgba(102, 112, 133, 1)"}>{data.price}</Text> */}
                    </Flex>
                  </Td>
                  <Td>
                    <Flex flexDirection={"column"}>
                      <Text>{data.date}</Text>
                    </Flex>
                  </Td>

                  <Td>
                    <Flex flexDirection={"column"}>
                      <Text>{data.type ==="Convert Dissertation to Manuscript"?"NGN 30,000":"NGN 60,000"}</Text>
                    </Flex>
                  </Td>

                  <Td>
                    {data.status === "Completed" ? (
                      <Successful />
                    ) : data.status === "Rejected" ? (
                      <Rejected />
                    ) : data.status === "Under Review" ? (
                      <Review />
                    ) : data.status === "Pending" ? (
                      <Pending />
                    ) : data.status === "Uploaded" ? (<Uploaded/>): null}
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
        <Spacer/>
      
    </Flex>
  );
};

const TableHeading = (props: any) => {
  
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
       <Link to='/review/requests'> <AllProjectsButton text="All Requests" /></Link>
      </Center>
    </Flex>
  );
};
