import { Box, Flex } from "@chakra-ui/react";
import { GoBackto } from "../../goBackto";
import { CancelUpdate } from "../../Profile/professional-info/cancelUpdate";
import { EmailListComps } from "./emailListComps";

export const EmailSettings = (props: any) => {
  return (
    <Flex flexDirection={'column'}>
      <Box w="fit-content" mb='30px'>
        <GoBackto name="Email Settings" />
      </Box>
      <EmailListComps
        id="1"
        title={"Notifications when there’s a new proposal"}
      />{" "}
      <EmailListComps
        id="2"
        title={"Notifications if a client rejects your review"}
      />{" "}
      <EmailListComps
        id="3"
        title={"Notifications if a client accepts your review"}
      />{" "}
      <EmailListComps
        id="4"
        title={"Notifications if a client accepts your review"}
      />
      <CancelUpdate onCancel={props.onCancel} />
    </Flex>
  );
};
