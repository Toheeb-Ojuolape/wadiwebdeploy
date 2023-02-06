import { Box, Flex, Spacer, useMediaQuery } from "@chakra-ui/react";
import { Earnings } from "./projectComps/earningComps";
import { ProjectsStick } from "./projectComps/projectComps";

export const ProjectsAndEarnings = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");
  return (
    <Flex flexDirection={"row"} flexWrap="wrap" mt="20px">
      <Box
      className="animate__animated animate__fadeInUp"
        padding="10px"
        borderRadius="md"
        bg="white"
        w={!isMobile ? "60%" : "100%"}
      >
        <ProjectsStick />
      </Box>
      <Spacer />
      <Flex
      className="animate__animated animate__fadeInUp"
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
