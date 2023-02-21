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
import { useNavigate } from "react-router-dom";
import { Account } from "./Account/account";
import { LoginHome } from "./loginActivity/loginHome";
import { Privacy } from "./privacy/privacy";

import { Profile } from "./Profile/profile";

export const SettingsComps = (props: any) => {
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const [tabIndex, setTabIndex] = useState(props.page);
  console.log(
    "🚀 ~ file: settingsContainer.tsx:23 ~ SettingsComps ~ props.page",
    props.page
  );

  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const history = useNavigate();
  return (
    <Flex bg="white" padding="20px" borderRadius={"md"} flexDirection="column">
      <Tabs index={tabIndex} h="300px" onChange={handleTabsChange} w={"100%"}>
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
            onClick={() => history("/review/settings/account-home")}
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
            onClick={() => history("/review/settings/profile-home")}
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
            onClick={() => history("/review/settings/privacy-home")}
          >
            <Box>
              <Text> {!isMobile ? "Privacy & Safety" : "Privacy .."} </Text>
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
            onClick={() => history("/review/settings/login-activity")}
          >
            <Box>
              <Text> {!isMobile ? "Login activity" : "Login .."} </Text>
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
            <Account />
          </TabPanel>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <Privacy />
          </TabPanel>
          <TabPanel>
            <LoginHome
              name={"Isaac Ojo"}
              profession={"Ass. Lecturer- Env Mgt"}
              pic="https://lh3.googleusercontent.com/-N43TPVUqQpk/AAAAAAAAAAI/AAAAAAAABK8/ONS86r57Wnk/photo.jpg?sz=256"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
