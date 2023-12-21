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
  Spacer,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

import Pagination from "react-paginate";
import { useState } from "react";
// import { tableDataList } from "./dataTest";
import "./paginate.css";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";
import { Progress } from "./progress";
import {
  ImportButton,
  DeleteButton,
} from "../../dashboardComps/myProjectsComps/actions";
import AreYouSure from "../../../Comps/Modals/AreYouSureModal";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../db";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const ProjectComps = (props: { projectData?: any }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(4);
  const history = useNavigate();

  const handlePageChange = (page: any) => {
    setCurrentPage(page.selected);
  };

  const sliceStart = currentPage * perPage;
  const sliceEnd = sliceStart + perPage;
  const displayedData = props.projectData
    ? props.projectData.slice(sliceStart, sliceEnd)
    : null;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const deleteProject = () => {
    onOpen();
  };

  const goToProject = (slug: string) => {
    history("/dashboard/publish/" + slug);
  };

  const confirmDelete = async (slug: string) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "projects", slug));
      setLoading(false);
      onClose();
      Swal.fire({
        icon: "success",
        title: "Project deleted Successfully",
        text: "You have successfully deleted your project",
        confirmButtonColor:"#2b5fd0",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Project not deleted",
        confirmButtonColor:"#2b5fd0"
      });
    }
  };

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
                  data: {
                    title: string;
                    progress: string;
                    date: string;
                    status: string;
                    slug: string;
                  },
                  index: number
                ) => (
                  <Tr onClick={() => goToProject(data.slug)} key={index} className="animate__animated animate__fadeIn cursor-pointer">
                    <Td w={"200px"}>
                      <Flex flexDirection={"column"}>
                      <Text>{data.title.length > 25 ? data.title.slice(0,25)+"...":data.title}</Text>
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
                    <div className={data.status.replaceAll(" ", "-")}>
                        {data.status}
                      </div>
                    </Td>
                    <Td>
                      <Progress percentage={data.progress} />
                    </Td>
                    <Td>
                      <Flex>
                        <ImportButton
                          goToProject={() => goToProject(data.slug)}
                        />
                        <DeleteButton deleteProject={deleteProject} />
                      </Flex>

                      <AreYouSure
                        title={"Delete Project"}
                        description={
                          "Are you sure you want to delete this project? This deletion is irreversible and all the data for this project would be lost"
                        }
                        isOpen={isOpen}
                        onClose={onClose}
                        onOpen={onOpen}
                        delete={() => confirmDelete(data.slug)}
                        loading={loading}
                      />
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
