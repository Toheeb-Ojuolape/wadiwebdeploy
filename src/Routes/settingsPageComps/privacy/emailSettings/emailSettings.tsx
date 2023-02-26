import { Box, Flex } from "@chakra-ui/react";
import { GoBackto } from "../../goBackto";
import { CancelUpdate } from "../../Profile/professional-info/cancelUpdate";
import { EmailListComps } from "./emailListComps";
import {useState} from "react"

export const EmailSettings = (props: any) => {
  const [loading] = useState(false)
  const onCancel = () =>{
    console.log("dh")
  }

  const updateProfile = () =>{
    console.log("dh")
  }

  const onUpdate = () =>{
    console.log("dh")
  }
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
      <CancelUpdate loading={loading} onCancel={onCancel} updateProfile={updateProfile} onUpdate={onUpdate}/>
    </Flex>
  );
};
