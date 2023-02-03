import { Button, Flex } from "@chakra-ui/react";

export const AcceptRejectButton = (props: {
  rejectClick?: any;
  acceptClick?: any;
}) => {
  return (
    <Flex gap='2'>
      <Button
        onClick={props.rejectClick}
        bg="rgba(240, 68, 56, 1)"
        color={"white"}
      >
        Reject
      </Button>
      <Button
        onClick={props.acceptClick}
        bg="rgba(18, 183, 106, 1)"
        color="white"
      >
        Accept
      </Button>
    </Flex>
  );
};
