import { Box, Flex } from "@chakra-ui/react";


import { SettingsComps } from "../dashboardComps/settingsPageComps/settingsContainer";


export const Settings = (props: {page: number}) => {
  return (
    <Flex      >
      <Box padding={"20px"} width={"100vw"}>
        <SettingsComps page= {props.page}/>
      </Box>
    </Flex>
  );
};
