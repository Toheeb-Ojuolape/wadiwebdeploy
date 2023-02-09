import { Box, Flex, Text } from "@chakra-ui/react";
import { Key, ProfileDelete, User } from "iconsax-react";
import { useNavigate, useParams } from "react-router-dom";
import { AccountNavLink } from "../accountNavLink";
import { BasicInfo } from "./basic-info/BasicInfo";
import { ProfInfo } from "./professional-info/Professional";

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
      {settingRoute === "profile-home" && <ProfileHome />}
      {settingRoute === "basic-info" && (
        <BasicInfo
          basicInfo={{ fName: "Ojo", lName: "Isaac", email: "isaac@email.com" }}
          yourBio={
            "Lorem ipsum dolor sit amet consectetur. Faucibus duis cursus ut phasellus platea."
          }
          pic="https://lh3.googleusercontent.com/-N43TPVUqQpk/AAAAAAAAAAI/AAAAAAAABK8/ONS86r57Wnk/photo.jpg?sz=256"
        />
      )}
      {settingRoute === "professional-info" && (
        <ProfInfo
          defaultSpecialization={"Professor"}
          defaultInstitution={"University of Lagos"}
          defaultTitle={"Computer Science"}
          onCancel={""}
        />
      )}
    </Box>
  );
};
