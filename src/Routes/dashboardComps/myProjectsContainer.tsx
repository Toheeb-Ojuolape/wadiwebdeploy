import {
  Box,
  Text
} from "@chakra-ui/react";
import { MyProjectComps } from "./myProjectsComps/myProjectsComps";

export const MyProjectsContainer = (props: any) => {
  return (
    <Box>
        <Text fontWeight={'bolder'} mt='40px' mb='20px'>My Projects</Text>
     <MyProjectComps/>
    </Box>
  );
};
