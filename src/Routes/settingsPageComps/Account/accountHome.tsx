import { Flex , Box, Text} from "@chakra-ui/react";
import { Key, ProfileDelete, User } from "iconsax-react";
import { AccountNavLink } from "../accountNavLink";

export const AccountHome = (props: any) => {
  return (
    <Flex className="animate__animated animate__fadeIn">
      <Box>
        <Text>
          Set your profile and account preferences below:
        </Text>
        <Box mt="20px">
          <AccountNavLink
            icon={<User size={"15px"} />}
            title={"Account information"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="/dashboard/settings/account"
          />

          <AccountNavLink
            icon={<Key size={"15px"} />}
            title={"Change your password"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="/dashboard/settings/change-password"
          />
          <AccountNavLink
            icon={<ProfileDelete size={"15px"} />}
            title={"Delete your account"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="/dashboard/settings/delete-account"
          />
        </Box>
      </Box>
    </Flex>
  );
};
