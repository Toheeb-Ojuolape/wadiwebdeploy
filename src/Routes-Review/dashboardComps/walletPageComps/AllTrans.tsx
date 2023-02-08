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
import { DebitData } from "./debitData";
import { AllProjectData } from "./allData";
import { CreditData } from "./creditData";
import { SelectContent } from "./select";

export const AllTransComps = (props: any) => {
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const [tabIndex, setTabIndex] = useState(0);

  const [isMobile] = useMediaQuery("(max-width: 800px)");

  return (
    <Flex bg="white" padding="20px" borderRadius={"md"} flexDirection="column">
      <Flex>
        {" "}
        <Spacer />
        <SelectContent
          placeholder="All"
          options={["24 hours", "1 week", "1 Month"]}
        />
      </Flex>
      <Tabs index={tabIndex} onChange={handleTabsChange} w={"100%"}>
        <TabList
          height={"fit-content"}
          ml={!isMobile ? "30px" : "0px"}
          mr={!isMobile ? "30px" : "0px"}
        >
          <Tab
            w={"33%"}
            mr={"20px"}
            color={"rgba(71, 84, 103, 1)"}
            _selected={{ color: "rgba(0, 0, 0, 1)" }}
            padding={"0"}
          >
            <Box>
              <Text>{!isMobile ? "All Transactions" : "All"} </Text>
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
              <Text>{"Credits"} </Text>
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
        </TabList>
        <TabPanels>
          <TabPanel>
            <AllProjectData />
          </TabPanel>
          <TabPanel>
            <CreditData />
          </TabPanel>
          <TabPanel>
            <DebitData />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
