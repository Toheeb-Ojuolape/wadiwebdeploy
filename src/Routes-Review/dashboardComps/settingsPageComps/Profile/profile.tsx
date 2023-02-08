import { Box, Flex, Text } from "@chakra-ui/react";
import { Key, ProfileDelete, User } from "iconsax-react";
import { useNavigate, useParams } from "react-router-dom";
import { AccountNavLink } from "../accountNavLink";
import { BasicInfo } from "./basic-info/BasicInfo";
import { ProfileHome } from "./profileHome";

export const Profile = (props: any) => {
  const params = useParams() as {
    reviewRoute: string;
    subroute: string;
    settingRoute: string;
  };
  const { reviewRoute, subroute, settingRoute } = params;

  return (
    <Box>
      {settingRoute === undefined && <ProfileHome />}
      {settingRoute === 'basic-info' && <BasicInfo/>}
    </Box>
  );
};
