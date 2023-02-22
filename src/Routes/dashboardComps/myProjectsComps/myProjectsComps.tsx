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
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import { DeleteButton, EditButton, ImportButton } from "./actions";

import { Progress } from "./progress";
import { AllProjectsButton, SelectContent } from "./selectContent";
import "./paginate.css";
import { Link } from "react-router-dom";
import AreYouSure from "../../../Comps/Modals/AreYouSureModal";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../db";
import Swal from "sweetalert2";

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
  const [currentPage] = useState(0);
  const [perPage] = useState(6);
  const sliceStart = currentPage * perPage;
  const sliceEnd = sliceStart + perPage;
  const displayedData = props.projectData
    ? props.projectData.slice(sliceStart, sliceEnd)
    : null;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading,setLoading] = useState(false)

  const deleteProject = () => {
    onOpen();
  };

  const confirmDelete = async (slug:string) =>{
    setLoading(true)
    try{
    await deleteDoc(doc(db, "projects", slug))
    setLoading(false)
    onClose()
    Swal.fire({
      icon:"success",
      title:"Project deleted Successfully",
      text:"You have successfully deleted your project",
      confirmButtonColor:"#0066f5",
    })
    }
    catch(error){
      Swal.fire({
        icon:"error",
        title:"Project not deleted"
      })
    }
  }

  return (
    <Flex flexDirection={"column"} flexWrap="wrap">
      <TableHeading title="Projects" />
      {props.projectData ? (
        <TableContainer minH={"350px"}>
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
                        <EditButton slug={data.slug} />
                        {data.status === "Successful" ? (
                          <ImportButton />
                        ) : (
                          <DeleteButton deleteProject={deleteProject} />
                        )}
                      </Flex>
                      <AreYouSure
                        title={"Delete Project"}
                        description={
                          "Are you sure you want to delete this project? This deletion is irreversible and all the data for this project would be lost"
                        }
                        isOpen={isOpen}
                        onClose={onClose}
                        onOpen={onOpen}
                        delete={()=>confirmDelete(data.slug)}
                        loading={loading}
                      />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Box minH={"350px"} width={"100%"}>
          <Skeleton mt="10px" height="80px" />
        </Box>
      )}
    </Flex>
  );
};

const TableHeading = (props: any) => {
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
