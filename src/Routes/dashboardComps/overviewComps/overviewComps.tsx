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
import {
  ReceiptText,
  Briefcase,
  ReceiptMinus,
  BrifecaseTick,
} from "iconsax-react";

const ProjectList = [
  {
    title: "Active projects",
    count: "10",

    bg: "rgba(242, 249, 253, 1)",
    icon: <Briefcase color="rgba(43, 95, 208, 1)" />,
  },
  {
    title: "Projects in review",
    count: "10",

    bg: "rgba(254, 245, 239, 1)",
    icon: <ReceiptText color="rgba(237, 112, 45, 1)" />,
  },
  {
    title: "Rejected projects",
    count: "10",
    bg: "rgba(254, 228, 226, 1)",
    icon: <ReceiptMinus color="rgba(240, 68, 56, 1)" />,
  },
  {
    title: "Completed projects",
    count: "10",
    bg: "rgba(209, 250, 223, 1)",

    icon: <BrifecaseTick color="rgba(18, 183, 106, 1)" />,
  },
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
    <Box
      bg={"white"}
      pt="30px"
      pb="30px"
      pl={"20px"}
      borderRadius='2xl'
      flexDirection={"column"}
      w={isMobile ? "100vw" : "300px"}
      mb="20px"
      _hover={{ bg: props.bg }}
      className="cursor-pointer"
    >
      <Box borderRadius="5px" padding={"5px"} w="fit-content" bg={props.bg}>
        {props.icon}
      </Box>
      <Text fontSize={"md"} fontWeight="light">
        {props.title}
      </Text>

      <Text fontFamily={"Montserrat"} fontSize={"60px"} fontWeight="extrabold">
        {props.count}
      </Text>
    </Box>
  );
};
