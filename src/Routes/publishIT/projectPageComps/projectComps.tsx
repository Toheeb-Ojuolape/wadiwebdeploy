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
} from "@chakra-ui/react";

import { AllProjectsButton } from "./selectContent";

import { Successful, Rejected, Review, InReview, Uploaded } from "./status";

import Pagination from "react-paginate";
import { useState } from "react";
import { tableDataList } from "./dataTest";
import "./paginate.css";
import { ArrowLeft3, ArrowRight3, Briefcase } from "iconsax-react";
import { Progress } from "./progress";
import {
  ImportButton,
  DeleteButton,
} from "../../dashboardComps/myProjectsComps/actions";

export const ProjectComps = (props: {projectData?: any}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(4);

  const handlePageChange = (page: any) => {
    setCurrentPage(page.selected);
  };

  const sliceStart = currentPage * perPage;
  const sliceEnd = sliceStart + perPage;
  const logDa = props.projectData;
  console.log("🚀 ~ file: projectComps.tsx:43 ~ ProjectComps ~ logDa", logDa);
  const displayedData = props.projectData
    ? props.projectData.slice(sliceStart, sliceEnd)
    : null;

  if (displayedData) {
    return (
      <Flex flexDirection={"column"} flexWrap="wrap" mt="10px">
        <TableContainer minH={"300px"}>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Project Name</Th>
                {/* <Th>Payment Plan</Th> */}
                <Th>Date created</Th>
                <Th>Status</Th>
                <Th>Progress</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {displayedData.map(
                (
                  data: { title: any; progress: any; date: any; status: any },
                  index: number
                ) => (
                  <Tr className="animate__animated animate__fadeIn">
                    <Td w={"200px"}>
                      <Flex flexDirection={"column"}>
                        <Text>{data.title}</Text>
                        {/* <Text>{data.size | ''}</Text> */}
                      </Flex>
                    </Td>

                    {/* <Td w={"200px"}>
                  <Flex flexDirection={"column"}>
                    <Text>{data.plan}</Text>
                    <Text color={"rgba(102, 112, 133, 1)"}>{data.price}</Text>
                  </Flex>
                </Td> */}
                    <Td>
                      <Flex flexDirection={"column"}>
                        <Text>{data.date}</Text>
                        {/* <Text color={"rgba(102, 112, 133, 1)"}>{data.time}</Text> */}
                      </Flex>
                    </Td>
                    <Td>
                      {data.status === "Successful" ? (
                        <Successful />
                      ) : data.status === "Rejected" ? (
                        <Rejected />
                      ) : data.status === "Reviewed" ? (
                        <Review />
                      ) : data.status === "Under Review" ? (
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
                        <ImportButton />
                        <DeleteButton />
                      </Flex>
                    </Td>
                  </Tr>
                )
              )}
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
            pageCount={props.projectData.length / perPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </Box>
      </Flex>
    );
  } else {
    return <div></div>;
  }
};


