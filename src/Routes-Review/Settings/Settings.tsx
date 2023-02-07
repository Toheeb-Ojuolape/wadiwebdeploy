import { Box, Flex } from "@chakra-ui/react";

import { AllRequestsComps } from "../dashboardComps/requestPageComps/AllRequests";
import { SettingsComps } from "../dashboardComps/settingsPageComps/settingsContainer";


export const Settings = (props: any) => {
  return (
    <Flex      className="animate__animated animate__fadeIn">
      <Box padding={"20px"} width={"100vw"}>
        <SettingsComps />
      </Box>
    </Flex>
  );
};
