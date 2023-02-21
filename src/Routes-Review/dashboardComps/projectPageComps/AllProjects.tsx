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
import { ReviewData } from "./reviewData";
import { AllProjectData } from "./allData";
import { RejectedData } from "./rejectedData";

import { CompletedData } from "./completedData";

export const AllProjectsComps = (props: any) => {
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const [tabIndex, setTabIndex] = useState(0);

  const [isMobile] = useMediaQuery('(max-width: 800px)');

  return (
    <Flex bg="white" padding="20px" borderRadius={"md"}>
      <Tabs index={tabIndex} onChange={handleTabsChange} w={"100%"}>
        <TabList height={"fit-content"}  ml={!isMobile ? "30px": "0px"} mr={!isMobile ? "30px": "0px"}>
          <Tab
               w={"33%"}
            mr= {"20px"}
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
          >
            <Box>
              <Text>{!isMobile ? "All Projects" : "All"} </Text>
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
            mr="20px"
          >
            <Box>
              <Text>{!isMobile ? "Project in review" : "Review"} </Text>
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
            mr="20px"
          >
            <Box>
              <Text> {!isMobile ? "Rejected Projects" : "Rejected"} </Text>
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
            mr="20px"
          >
            <Box>
              <Text>{!isMobile ? "Completed Projects" : "Completed"}</Text>
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
          <TabPanel>
            <AllProjectData />
          </TabPanel>
          <TabPanel>
            <ReviewData />
          </TabPanel>
          <TabPanel>
            <RejectedData />
          </TabPanel>
          <TabPanel>
            <CompletedData />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
