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
import { useState } from "react";

import { DeleteButton, EditButton, ImportButton } from "./actions";
import { tableDataList } from "./dataTest";
import { Progress } from "./progress";
import { AllProjectsButton, SelectContent } from "./selectContent";
import { Successful, Rejected, Review } from "./status";
import Pagination from "react-paginate";

import './paginate.css'
import { ArrowLeft3, ArrowRight3, Briefcase } from "iconsax-react";
import { Link } from "react-router-dom";

const dates = ["2021", "2022", "2023", "2024", "2025"];
const query = ["Environmental", "Social", "Economic", "All"];



export const MyProjectComps = (props: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const [data, setData] = useState(tableDataList);

  const handlePageChange = (page: any) => {
    setCurrentPage(page.selected);
  };

  const sliceStart = currentPage * perPage;
  const sliceEnd = sliceStart + perPage;
  const displayedData = data.slice(sliceStart, sliceEnd);
  return (
    <Flex flexDirection={"column"} flexWrap="wrap">
      <TableHeading title="Projects" />
      <TableContainer minH={'350px'}>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Status</Th>
              <Th>Date created</Th>
              <Th>Progress</Th>
              <Th textAlign={'right'}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            
            {displayedData.map((data:any, index:Number) => (
              <Tr>
                <Td w={"200px"}>
                  <Flex flexDirection={"column"}>
                    <Text>{data.name}</Text>
                    <Text>{data.size}</Text>
                  </Flex>
                </Td>

                <Td>
                  {data.status === "Successful" ? <Successful/>: data.status === "Rejected"? <Rejected/> : data.status === "Reviewed"?<Review />:null}
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
      <Box mt='20px' maxW='100%'>
            <Pagination
              previousLabel={<ArrowLeft3/>}
              nextLabel={<ArrowRight3/>}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={data.length / perPage}
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
        <Link to='/review/home'><AllProjectsButton text="All Projects" /></Link>
      </Center>
    </Flex>
  );
};
