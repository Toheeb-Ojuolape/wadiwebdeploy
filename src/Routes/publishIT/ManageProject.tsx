import {
  Box,
  Flex,
  Center,
  Spacer,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";

import { AllProjectsComps } from "./projectPageComps/AllProjects";
import { useNavigate } from "react-router-dom";
import {ThunkDispatch} from "@reduxjs/toolkit";
import { getProject } from "../../store/projectReducer";
import { useDispatch,useSelector} from 'react-redux';
import React from 'react'


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
  { text: "All" },
  { text: "Review" },
  { text: "Rejected " },
  { text: "Completed" },
];

interface MyProjects {
  project:{
    value:Map<any,any>
  },
  loading: Boolean
}

export const ManageProjects = (props: any) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const projectData = useSelector((state: MyProjects) => state.project.value)

  // React.useEffect(() => {
  //   dispatch(getProject())
  //   if (!props.loggedIn) {
  //     window.location.href = "/signin";
  //   }
  // }, [dispatch,getProject]);
  
  return (
    <Flex flexDirection={"row"} className="animate__animated animate__fadeIn">
      <Box padding={"20px"} width={"100vw"} flexDirection={"column"}>
        <TableHeading />
        <AllProjectsComps projectData={props.projectData}/>
      </Box>
    </Flex>
  );
};

const TableHeading = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const history = useNavigate()


  const addProject = () =>{
     history("/dashboard/publish/new-project")
  }
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
        <Button onClick={addProject} bg="rgba(43, 95, 208, 1)" color={"white"} fontSize={"14px"}>
          Create Project
        </Button>
      </Center>
    </Flex>
  );
};
