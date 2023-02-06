import {
  Box,
  Flex,
  useMediaQuery,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";

export const Container = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 951px)");
  const [isMobile2] = useMediaQuery(
    "(min-width: 951px) and (max-width: 1230px)"
  );

  return (
    <Flex
      bg={"white"}
      className="animate__animated animate__jello"
      padding={isMobile ? "12px" : "30px"}
      justifyContent={"space-between"}
      borderRadius="2xl"
      flexDirection={"column"}
      width={
        isMobile && props.title === "Earnings"
          ? "100%"
          : isMobile && props.title !== "Earnings"
          ? "49%"
          : isMobile2 && props.title !== "Earnings"
          ? "16vw"
          : isMobile2 && props.title === "Earnings"
          ? "100%"
          : "18%"
      }
      mb="2%"
      _hover={{ bg: props.bg }}
    >
      <Flex>
        <Box borderRadius="5px" padding={"5px"} w="fit-content" bg={props.bg}>
          {props.icon}
        </Box>
        <Spacer />
        {props.title === "Earnings" && (
          <Button
            size="sm"
            borderRadius={"lg"}
            borderColor={"#2B5FD0"}
            color="#2B5FD0"
            variant="outline"
            onClick={props.onClickWithdraw}
          >
            Withdraw
          </Button>
        )}
      </Flex>
      <Text fontSize={!isMobile ? "16px" : "14px"} fontWeight="light">
        {props.title}
      </Text>

      <Text
        fontFamily={"Montserrat"}
        lineHeight={!isMobile ? "50px" : "30px"}
        fontSize={!isMobile ? "25px" : "20px"}
        fontWeight="extrabold"
      >
        {props.title === "Earnings" && <span className="text-lg">₦ </span>}{" "}
        {props.count}
      </Text>
    </Flex>
  );
};
