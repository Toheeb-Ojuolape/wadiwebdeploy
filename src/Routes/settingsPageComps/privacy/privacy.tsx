import { Box,} from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { EmailSettings } from "./emailSettings/emailSettings";
import { PrivacyHome } from "./privacyHome";




export const Privacy = (props: any) => {
  const params = useParams() as {
    reviewRoute: string;
    subroute: string;
    settingRoute: string;
  };
  const {settingRoute } = params;

  return (
    <Box>
      {settingRoute === "privacy-home" && <PrivacyHome />}
      {settingRoute === 'email-settings' && <EmailSettings />}
    </Box>
  );
};
