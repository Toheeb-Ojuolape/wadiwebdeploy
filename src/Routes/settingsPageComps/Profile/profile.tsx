import { Box,} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BasicInfo } from "./basic-info/BasicInfo";
import { ProfInfo } from "./professional-info/Professional";
import { ProfileHome } from "./profileHome";
import {useState} from "react"
import { doc,updateDoc } from "firebase/firestore";
import { db } from "../../../db";


export const Profile = (props: any) => {
  const [loading,setLoading] = useState(false)
  const [userInfo,setUserInfo] = useState<UserInfo>()
  const wadiKey = localStorage.getItem("wadiKey")

  interface UserInfo{
    fName:string,
    lName:string,
    image:string
  }


  const params = useParams() as {
    reviewRoute: string;
    subroute: string;
    settingRoute: string;
  };
  const { settingRoute } = params;

  const setInfo = (e:any) =>{
    setUserInfo(e)
  }

  const updateProfile = () =>{
    console.log(userInfo?.image)
    if(wadiKey !== null){
    setLoading(true)
    const docRef = doc(db,"users",wadiKey)
    updateDoc(docRef,{
      firstName:userInfo?.fName,
      lastName:userInfo?.lName,
      photoURL:userInfo?.image
    }).then((response)=>{
      console.log(response)
      setLoading(false)
      window.location.href = "/dashboard/settings/profile-home"
    })
  }
  }

  const onUpdate = () =>{
    console.log("does this work?")
  }


  return (
    <Box>
      {settingRoute === "profile-home" && <ProfileHome />}
      {settingRoute === "basic-info" && (
        <BasicInfo
          basicInfo={{ fName: props.userData.firstName, lName: props.userData.lastName, email: props.userData.email,image:props.userData.photoURL }}
          yourBio={
            props.userData.bio
          }
          pic={props.userData.photoURL}
          updateProfile = {updateProfile}
          loading={loading}
          setInfo={setInfo}
        />
      )}
      {settingRoute === "professional-info" && (
        <ProfInfo
          defaultSpecialization={props.userData.specialization}
          defaultInstitution={props.userData.institution}
          defaultTitle={props.userData.title}
          onCancel={""}
          loading={loading}
          updateProfile={updateProfile}
          onUpdate={onUpdate}
        />
      )}
    </Box>
  );
};
