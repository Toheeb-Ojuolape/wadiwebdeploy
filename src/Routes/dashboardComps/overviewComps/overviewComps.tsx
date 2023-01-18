import {
  Box,
  Center,
  Flex,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const ProjectList = [
  { title: "Active projects", count: "10", color: "#2B5FD0", bg: "#EFF8FF" },
  {
    title: "Projects in review",
    count: "10",
    color: "#F79009",
    bg: "#FEF0C7",
  },
  { title: "Rejected projects", count: "10", color: "#F04438", bg: "#FEE4E2" },
  { title: "Completed projects", count: "10", color: "#12B76A", bg: "#D1FADF" },
];

export const OverviewComps = () => {
  return (
    <Flex mt={"20px"} justifyContent="space-between" flexWrap={"wrap"}>
      {ProjectList.map((project, index) => {
        return <Container {...project} key={index} />;
      })}
      
    </Flex>
  );
};

const Container = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 725px)");

  return (
    <Center
      bg={"white"}
      pt="30px"
      pb="30px"
      flexDirection={"column"}
      borderBottom={`4px solid ${props.color}`}
      w={isMobile ? "100vw" : "210px"}
      mb="20px"
      _hover={{ bg: "rgba(240, 240, 240, 0.29)" }}
      className="cursor-pointer"
    >
      <Tag
        size={"md"}
        variant="subtle"
        bg={props.bg}
        width={"fit-content"}
        color={props.color}
        borderRadius={"3xl"}
        mb="4"
      >
        <TagLeftIcon boxSize="12px" as={FaBriefcase} />
        <TagLabel>{props.title}</TagLabel>
      </Tag>
      <Text fontFamily={"Montserrat"} fontSize={"2xl"} fontWeight="extrabold">
        {props.count}
      </Text>
    </Center>
  );
};
