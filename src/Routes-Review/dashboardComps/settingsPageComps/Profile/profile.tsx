import { Box,} from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { BasicInfo } from "./basic-info/BasicInfo";
import { ProfInfo } from "./professional-info/Professional";

import { ProfileHome } from "./profileHome";

export const Profile = (props: any) => {
  const params = useParams() as {
    reviewRoute: string;
    subroute: string;
    settingRoute: string;
  };
  const { settingRoute } = params;

  return (
    <Box>
      {settingRoute === "profile-home" && <ProfileHome />}
      {settingRoute === "basic-info" && (
        <BasicInfo
          basicInfo={{ fName: "Ojo", lName: "Isaac", email: "isaac@email.com",image:"" }}
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
