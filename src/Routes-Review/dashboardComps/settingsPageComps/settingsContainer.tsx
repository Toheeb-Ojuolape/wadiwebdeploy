import {
  Box,
  Flex,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { Account } from "./Account/account";
import { Profile } from "./Profile/profile";
import { ProfileHome } from "./Profile/profileHome";

export const SettingsComps = (props: any) => {
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const [tabIndex, setTabIndex] = useState(props.page);
  console.log("🚀 ~ file: settingsContainer.tsx:23 ~ SettingsComps ~ props.page", props.page)

  const [isMobile] = useMediaQuery("(max-width: 800px)");

  return (
    <Flex bg="white" padding="20px" borderRadius={"md"} flexDirection="column">
      <Tabs index={tabIndex} onChange={handleTabsChange} w={"100%"}>
        <TabList
          alignContent={"center"}
          height={"fit-content"}
          ml={!isMobile ? "30px" : "0px"}
          mr={!isMobile ? "30px" : "0px"}
        >
          <Tab
            w={"33%"}
           
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
          >
            <Box>
              <Text>{"Account"} </Text>
              <Box
                display={tabIndex === 0 ? "block" : "none"}
                w="100%"
                h="4px"
                bg="rgba(43, 95, 208, 1)"
                borderRadius={"6px 6px 0px 0px"}
              ></Box>
            </Box>
          </Tab>{" "}
          <Tab
            w={"33%"}
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
           
          >
            <Box>
              <Text>{"Profile"} </Text>
              <Box
                display={tabIndex === 1 ? "block" : "none"}
                w="100%"
                h="4px"
                bg="rgba(43, 95, 208, 1)"
                borderRadius={"6px 6px 0px 0px"}
              ></Box>
            </Box>
          </Tab>{" "}
          <Tab
            w={"33%"}
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
        
          >
            <Box>
              <Text> {"Debits"} </Text>
              <Box
                display={tabIndex === 2 ? "block" : "none"}
                w="100%"
                h="4px"
                bg="rgba(43, 95, 208, 1)"
                borderRadius={"6px 6px 0px 0px"}
              ></Box>
            </Box>
          </Tab>
          <Tab
            w={"33%"}
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
       
          >
            <Box>
              <Text> {!isMobile  ? "Login activity": "Login .."} </Text>
              <Box
                display={tabIndex === 3 ? "block" : "none"}
                w="100%"
                h="4px"
                bg="rgba(43, 95, 208, 1)"
                borderRadius={"6px 6px 0px 0px"}
              ></Box>
            </Box>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel><Account /></TabPanel>
          <TabPanel><Profile/></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
