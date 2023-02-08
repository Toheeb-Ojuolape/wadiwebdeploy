import { Flex , Box, Text} from "@chakra-ui/react";
import { Key, ProfileDelete, User } from "iconsax-react";
import { AccountNavLink } from "../accountNavLink";

export const ProfileHome = (props: any) => {
  return (
    <Flex className="animate__animated animate__fadeIn">
      <Box>
        
        <Box mt="20px">
          <AccountNavLink
            icon={<User size={"15px"} />}
            title={"Basic information"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="basic-info"
          />

          <AccountNavLink
            icon={<Key size={"15px"} />}
            title={"Professional information"}
            sub={
              "See your account information like your phone number and email address"
            }
            link="professional-info"
          />
     
        </Box>
      </Box>
    </Flex>
  );
};
