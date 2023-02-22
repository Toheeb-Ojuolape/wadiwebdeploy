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
        We have successfully received your manuscript and we are currently assigning it to one of the competent reviewers in our database
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
