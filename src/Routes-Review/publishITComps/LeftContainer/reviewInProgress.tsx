import { Box, Center, Text, useMediaQuery } from "@chakra-ui/react";
import { LottieContent } from "./loading";
import { ProjectDetailsButton } from "./projectDetailsButton";

export const ReviewInProgress = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  return (
    <Box flexWrap="wrap" padding={"20px"}>
      <Center w="50px">
        <LottieContent />
      </Center>
      <Text fontWeight={"extrabold"} fontSize="18px" mt="40px">
        Review-in-progress
      </Text>
      <Text fontSize={"14px"}>
        Lorem ipsum dolor sit amet consectetur. Duis purus adipiscing amet nisi
        nibh ac nisi pretium laoreet. Odio arcu dolor consequat vitae et
        porttitor aliquet nec. Morbi justo aliquam sit in lectus ac vitae enim
        a. Turpis nullam sodales turpis feugiat vestibulum felis faucibus nulla.
        Dolor senectus consectetur leo elementum non ultrices.
      </Text>
      <Center
        mt="20px"
        className="rgba(229, 235, 244, 1)"
        bg="rgba(229, 235, 244, 1)"
        color="rgba(71, 84, 103, 1)"
        w={!isMobile ? "300px" : "100%"}
        padding="10px"
        borderRadius={"lg"}
      >
        <Text fontSize={"14px"}>Your manuscript is being reviewed</Text>
        
      </Center>
      <ProjectDetailsButton text='Next' onClick={props.onClick}/>
    </Box>
  );
};
