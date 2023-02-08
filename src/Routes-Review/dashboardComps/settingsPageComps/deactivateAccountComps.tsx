import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

export const DeactivateAccountComps = (props: {
  pic: string;
  name: string;
  profession: string;
  onClick: any;
}) => {
  const [isMobile, setIsMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex flexDirection={"column"}>
      <HStack>
        <Avatar src={props.pic} />
        <Box>
          <Text>{props.name}</Text>
          <Text>{props.profession}</Text>
        </Box>
      </HStack>
      <Box mt="20px">
        <Text mb="20px">This will deactivate your account</Text>
        <Text
          w={isMobile ? "fit-content" : "500px"}
          color="rgba(71, 84, 103, 1)"
          fontSize={"12px"}
        >
          You are about to begin the process of deactivating your account on
          Wadi. The implication of this decision is that your account will no
          longer appear on the platform wadi.africa. You will no longer be able
          to upload or review manuscripts any more.
        </Text>
      </Box>
      <Button
        mt="20px"
        onClick={props.onClick}
        size="sm"
        _hover={{ bg: "rgba(240, 68, 56, 0.5)", color: "red" }}
        bg="transparent"
        w={!isMobile ? "200px" : "100%"}
        color="red"
      >
        Deactivate
      </Button>
    </Flex>
  );
};
