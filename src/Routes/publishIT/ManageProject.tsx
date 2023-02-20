import {
  Box,
  Flex,
  Center,
  Spacer,

  Button,
} from "@chakra-ui/react";

import { AllProjectsComps } from "./projectPageComps/AllProjects";
import { useNavigate } from "react-router-dom";
import {ThunkDispatch} from "@reduxjs/toolkit";
import { getProject } from "../../store/projectReducer";
import { useDispatch,useSelector} from 'react-redux';
import React from 'react'




interface MyProjects {
  project:{
    value:Map<any,any>
  },
  loading: Boolean
}

export const ManageProjects = (props: any) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const projectData = useSelector((state: MyProjects) => state.project.value)

  React.useEffect(() => {
    dispatch(getProject())
   
  }, [dispatch,getProject]);
  
  return (
    <Flex flexDirection={"row"} className="animate__animated animate__fadeIn">
      <Box padding={"20px"} width={"100vw"} flexDirection={"column"}>
        <TableHeading />
        <AllProjectsComps projectData={projectData}/>
      </Box>
    </Flex>
  );
};

const TableHeading = (props: any) => {

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
