import { Box, Flex, Spacer, useMediaQuery } from "@chakra-ui/react";
import { RequestComps } from "./requestComps/requestComps";
import { UpComingComps } from "./requestComps/upComingDeadLines";

export const RequestAndDeadline = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");
  return (
    <Flex flexDirection={"row"} flexWrap="wrap" mt="20px">
      <Box
        className="animate__animated animate__fadeInUp"
        padding="10px"
        borderRadius="md"
        bg="white"
        h="fit-content"
        w={!isMobile ? "60%" : "100%"}
      >
        <RequestComps />
      </Box>
      <Spacer />
      <Flex
        className="animate__animated animate__fadeInUp"
        w={!isMobile ? "38%" : "100%"}
        mt={isMobile ? "20px" : ""}
      >
        <UpComingComps />
      </Flex>
    </Flex>
  );
};
