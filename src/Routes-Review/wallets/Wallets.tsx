import { Box, Flex } from "@chakra-ui/react";
import { AccountBalanceWithdraw } from "../dashboardComps/walletPageComps/AccountBalanceWithdraw";

import { AllTransComps } from "../dashboardComps/walletPageComps/AllTrans";

export const Wallets = (props: any) => {
  return (
    <Flex className="animate__animated animate__fadeIn">
    
      <Box padding={"20px"} width={"100vw"}>
        <AccountBalanceWithdraw balance='30000'/>
        <AllTransComps />
      </Box>
    </Flex>
  );
};
