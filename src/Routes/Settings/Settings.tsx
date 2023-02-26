import { Box, Flex } from "@chakra-ui/react";
import { SettingsComps } from "../settingsPageComps/settingsContainer";




export const Settings = (props:any) => {
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        <SettingsComps page= {props.page} userData= {props.userData}/>
      </Box>
    </Flex>
  );
};
