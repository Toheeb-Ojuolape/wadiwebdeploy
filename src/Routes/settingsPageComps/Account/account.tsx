import { Box, } from "@chakra-ui/react";

import {  useParams } from "react-router-dom";

import { AccountHome } from "./accountHome";
import { AccountInfo } from "./accountInfo";
import { ChangePassword } from "./changePassword";
import { DeleteAccount } from "./deactiveAccount";

export const Account = (props: any) => {
  const params = useParams() as {
    reviewRoute: string;
    subroute: string;
    settingRoute: string;
  };
  const { settingRoute } = params;

  return <Box>
    {settingRoute === undefined && <AccountHome userData={props.userData} />}
    {settingRoute === "account-home" && <AccountHome  userData={props.userData}/>}
    {settingRoute === "account" && <AccountInfo  userData={props.userData}/>}
    {settingRoute === "change-password" && <ChangePassword  userData={props.userData}/>}
    {settingRoute === "delete-account" && <DeleteAccount  userData={props.userData}/>}

    
    </Box>;
};
