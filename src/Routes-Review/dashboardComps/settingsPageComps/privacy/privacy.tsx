import { Box, Flex, Text } from "@chakra-ui/react";
import { Key, ProfileDelete, User } from "iconsax-react";
import { useNavigate, useParams } from "react-router-dom";
import { AccountNavLink } from "../accountNavLink";
import { EmailSettings } from "./emailSettings/emailSettings";
import { PrivacyHome } from "./privacyHome";




export const Privacy = (props: any) => {
  const params = useParams() as {
    reviewRoute: string;
    subroute: string;
    settingRoute: string;
  };
  const { reviewRoute, subroute, settingRoute } = params;

  return (
    <Box>
      {settingRoute === "privacy-home" && <PrivacyHome />}
      {settingRoute === 'email-settings' && <EmailSettings />}
    </Box>
  );
};
