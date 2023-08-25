import { Box, Flex, Tab, Tabs } from "@chakra-ui/react";
import {
  Briefcase,
  CardPos,
  DocumentText,
 
  TimerStart,
} from "iconsax-react";

import { NavBoxes } from "./navBoxes";

const navItems = [
  {
    title: "Project details",
    subtitle: "Enter project details",
    icon: <Briefcase size="15" color="rgba(41, 45, 50, 1)" variant="TwoTone" />,
  },
  {
    title: "Payment",
    subtitle: "Pay for review service",
    icon: <CardPos size="15" color="rgba(41, 45, 50, 1)" variant="TwoTone" />,
  },
  {
    title: "Review-in-progress",
    subtitle: "Your project is being reviewed",
    icon: (
      <TimerStart size="15" color="rgba(41, 45, 50, 1)" variant="TwoTone" />
    ),
  },
  {
    title: "Manuscript ready",
    subtitle: "Your manuscript is ready for download",
    icon: (
      <DocumentText size="15" color="rgba(41, 45, 50, 1)" variant="TwoTone" />
    ),
  },
];
export const RightContainer = (props: any) => {
  return (
    <Flex
      flexWrap={"wrap"}
      h="full"
      flexDirection={"column"}
      w="100%"
      bg={"white"}
      borderRadius="md"
    >
      {/* {navItems.map((item, index) => {
        return (
          <NavBoxes
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            isActive={index === 0 ? true : false}
          />
        );
      })} */}
      <Tabs
        index={props.tabIndex}
        onChange={props.handleTabsChange}
        w={"100%"}
        isLazy
      >
        <Box>
          {navItems.map((item, index) => {
            return (
              <Tab key={index} mt='10px' border={"0px"} textAlign="left">
                <NavBoxes
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.icon}
                
                />
              </Tab>
            );
          })}
         
        </Box>
      </Tabs>
    </Flex>
  );
};
