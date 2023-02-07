import { Flex , Box, Text} from "@chakra-ui/react";
import { Key, ProfileDelete, User } from "iconsax-react";
import { AccountNavLink } from "../accountNavLink";

export const AccountHome = (props: any) => {
  return (
    <Flex className="animate__animated animate__fadeIn">
      <Box>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Est vel condimentum justo
          pellentesque.
        </Text>
        <Box mt="20px">
          <AccountNavLink
            icon={<User size={"15px"} />}
            title={"Account information"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="account"
          />

          <AccountNavLink
            icon={<Key size={"15px"} />}
            title={"Change your password"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="change-password"
          />
          <AccountNavLink
            icon={<ProfileDelete size={"15px"} />}
            title={"Delete your account"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="delete-account"
          />
        </Box>
      </Box>
    </Flex>
  );
};
