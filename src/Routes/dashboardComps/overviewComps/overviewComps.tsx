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
    count: "0",

    bg: "rgba(242, 249, 253, 1)",
    icon: <Briefcase color="rgba(43, 95, 208, 1)" />,
  },
  {
    title: "Projects in review",
    count: "0",

    bg: "rgba(254, 245, 239, 1)",
    icon: <ReceiptText color="rgba(237, 112, 45, 1)" />,
  },
  {
    title: "Rejected projects",
    count: "0",
    bg: "rgba(254, 228, 226, 1)",
    icon: <ReceiptMinus color="rgba(240, 68, 56, 1)" />,
  },
  {
    title: "Completed projects",
    count: "0",
    bg: "rgba(209, 250, 223, 1)",

    icon: <BrifecaseTick color="rgba(18, 183, 106, 1)" />,
  },
];

export const OverviewComps = (props:any) => {
  return (
    <Flex mt={"20px"} justifyContent="space-between" flexWrap={"wrap"}>
      {ProjectList.map((project:any, index:Number) => {
        return <Container projects={props.userData.projects} {...project} key={index} />;
      })}
    </Flex>
  );
};

const Container = (props: any) => {
  
  const [isMobile] = useMediaQuery("(max-width: 951px)");
  const [isMobile2] = useMediaQuery("(min-width: 951px) and (max-width: 1140px)");


  return (
    <Flex
      bg={"white"}
      className="animate__animated animate__jello"
      padding={isMobile ?"12px" : "30px"}
      justifyContent={"space-between"}
      borderRadius='2xl'
      flexDirection={"column"}
      width={isMobile ? "49%" : isMobile2 ? "16vw" : "22%"}
     
      mb="2%"
      _hover={{ bg: props.bg }}
  
    >
      <Box borderRadius="5px" padding={"5px"} w="fit-content" bg={props.bg}>
        {props.icon}
      </Box>
      <Text fontSize={!isMobile ?"16px" : "14px"} fontWeight="light">
        {props.title}
      </Text>

      <Text fontFamily={"Montserrat"} lineHeight={!isMobile ? '50px': "30px"} fontSize={!isMobile ? "40px": "20px"} fontWeight="bold">
        {props.count}
      </Text>
    </Flex>
  );
};
