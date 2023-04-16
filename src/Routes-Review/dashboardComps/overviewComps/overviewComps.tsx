import { Flex } from "@chakra-ui/react";
import {
  ReceiptText,
  Briefcase,
  ReceiptMinus,
  BrifecaseTick,
  Wallet3,
} from "iconsax-react";
import { Container } from "./containerProjects";

const ProjectList = [
  {
    title: "Active",
    count: "0",

    bg: "rgba(242, 249, 253, 1)",
    icon: <Briefcase color="rgba(43, 95, 208, 1)" />,
  },
  {
    title: "Under Review",
    count: "0",

    bg: "rgba(254, 245, 239, 1)",
    icon: <ReceiptText color="rgba(237, 112, 45, 1)" />,
  },
  {
    title: "Rejected",
    count: "0",
    bg: "rgba(254, 228, 226, 1)",
    icon: <ReceiptMinus color="rgba(240, 68, 56, 1)" />,
  },
  {
    title: "Completed",
    count: "0",
    bg: "rgba(209, 250, 223, 1)",

    icon: <BrifecaseTick color="rgba(18, 183, 106, 1)" />,
  },
  {
    title: "Earnings",
    count: "0",
    bg: "rgba(254, 245, 239, 1)",

    icon: <Wallet3 color="rgba(237, 112, 45, 1)" />,
  },
];

export const OverviewComps = (props:any) => {
  return (
    <Flex
     
      mt={"20px"}
      justifyContent="space-between"
      flexWrap={"wrap"}
    >
      {ProjectList.map((project, index) => {
        return <Container projects={props.projectData} {...project} key={index} />;
      })}
    </Flex>
  );
};
