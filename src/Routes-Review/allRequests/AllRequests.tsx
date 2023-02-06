import { Box, Flex } from "@chakra-ui/react";

import { AllRequestsComps } from "../dashboardComps/requestPageComps/AllRequests";


export const AllRequests = (props: any) => {
  return (
    <Flex      className="animate__animated animate__fadeIn">
      <Box padding={"20px"} width={"100vw"}>
        <AllRequestsComps />
      </Box>
    </Flex>
  );
};
