import { Flex, Box,  } from "@chakra-ui/react";
import {
  Import,
 
  SmsNotification,

} from "iconsax-react";
import { AccountNavLink } from "../accountNavLink";

export const PrivacyHome = (props: any) => {
  return (
    <Flex className="animate__animated animate__fadeIn">
      <Box>
        <Box mt="20px">
          <AccountNavLink
            icon={<SmsNotification size={"15px"} />}
            title={"Email Settings"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="/dashboard/settings/email-settings"
          />

          <AccountNavLink
            icon={<Import size={"15px"} />}
            title={"Download your data"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="/dashboard/settings/download-data"
          />
        </Box>
      </Box>
    </Flex>
  );
};
