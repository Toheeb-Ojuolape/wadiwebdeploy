import { Box, Flex } from "@chakra-ui/react";

import { AllRequestsComps } from "../dashboardComps/requestPageComps/AllRequests";

export const AllRequests = (props: any) => {
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        <AllRequestsComps />
      </Box>
    </Flex>
  );
};
