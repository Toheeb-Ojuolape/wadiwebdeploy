import { Box, Flex, Text } from "@chakra-ui/react";
import { Key, ProfileDelete, User } from "iconsax-react";
import { useNavigate, useParams } from "react-router-dom";
import { AccountNavLink } from "../accountNavLink";
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
  const { reviewRoute, subroute, settingRoute } = params;
  console.log(
    "🚀 ~ file: account.tsx:9 ~ Account ~ settingRoute",
    settingRoute
  );

  return <Box>
    {settingRoute === undefined && <AccountHome />}
    {settingRoute === "account-home" && <AccountHome />}
    {settingRoute === "account" && <AccountInfo/>}
    {settingRoute === "change-password" && <ChangePassword/>}
    {settingRoute === "delete-account" && <DeleteAccount/>}

    
    </Box>;
};
