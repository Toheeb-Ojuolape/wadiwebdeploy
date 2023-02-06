import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { AcceptedData } from "./acceptedData";
import { AllRequestData } from "./allData";
import { RejectedData } from "./rejectedData";
import { RequestComps } from "./requestComps";

export const AllRequestsComps = (props: any) => {
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const [tabIndex, setTabIndex] = useState(0);
  const [isMobile] = useMediaQuery('(max-width: 800px)');
  return (
    <Flex bg="white" padding="20px" borderRadius={"md"} >
      <Tabs  index={tabIndex} onChange={handleTabsChange} w={"100%"}>
        <TabList height={"fit-content"} ml={!isMobile ? "30px": "0px"} mr={!isMobile ? "10px": "0px"}>
          <Tab
         mr= {"20px"}
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
        
          >
            <Box>
              <Text> {!isMobile ? "All Requests" : "All"} </Text>
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
          
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
            mr='20px'
          >
            <Box>
              <Text> {!isMobile ? "Accepted Requests" : "Accepted"}  </Text>
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
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
            mr='20px'
          >
            <Box>
              <Text> {!isMobile ? "Rejected Requests" : "Rejected"} </Text>
              <Box
                display={tabIndex === 2 ? "block" : "none"}
                w="100%"
                h="4px"
                bg="rgba(43, 95, 208, 1)"
                borderRadius={"6px 6px 0px 0px"}
              ></Box>
            </Box>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <AllRequestData/>
          </TabPanel>
          <TabPanel><AcceptedData/></TabPanel>
          <TabPanel><RejectedData/></TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
