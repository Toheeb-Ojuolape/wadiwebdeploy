import { Box, Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { Earnings } from "./projectComps/earningComps";
import { ProjectsStick } from "./projectComps/projectComps";

export const ProjectsAndEarnings = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");
  return (
    <Flex flexDirection={"row"} flexWrap="wrap" mt="20px">
      <Box
        padding="10px"
        borderRadius="md"
        bg="white"
        w={!isMobile ? "60%" : "100%"}
      >
        <ProjectsStick />
      </Box>
      <Spacer />
      <Flex
        padding="10px"
        borderRadius="md"
        bg="white"
        w={!isMobile ? "38%" : "100%"}
        mt={isMobile ? "20px" : ""}
      >
        <Earnings />
      </Flex>
    </Flex>
  );
};
