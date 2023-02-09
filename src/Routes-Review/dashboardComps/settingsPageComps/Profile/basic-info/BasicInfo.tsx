import {
  Box,
  Flex,
  FormLabel,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { BasicInfoInterface } from "../../../../../Interface/basicInfoInterface";
import { GoBackto } from "../../goBackto";
import { CancelUpdate } from "./cancelUpdate";
import { InputComps } from "./inputComps";
import { UploadProfilePic } from "./uploadProfilePic";

export const BasicInfo = (props: {
  basicInfo: BasicInfoInterface;
  yourBio: string;
  pic: string;
  onCancel?: any;
  onUpdate?: any;
}) => {
  const [basicInfo, setBasicInfo] = useState<BasicInfoInterface>(
    props.basicInfo || {
      fName: "",
      lName: "",
      email: "",
    }
  );
  const [yourBio, setYourBio] = useState<string>(props.yourBio || "");
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [preview, setPreview] = useState(props.pic);
  const [edit, setedit] = useState("block");
  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setBasicInfo({ ...basicInfo, [name]: value });
  };

  function onClosedCrop() {
    setPreview("");
  }
  function onCrop(pv: any) {
    setPreview(pv);
    setedit("none");
  }
  function onBeforeFileLoad(elem: any) {
    if (elem.target.files[0].size > 79160080) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }
  return (
    <Flex flexDirection={"column"}>
      <Box w="fit-content" mb="10px">
        <GoBackto name="Basic information" />
      </Box>
      <Text mb="5px">Profile picture</Text>
      <UploadProfilePic
        setedit={setedit}
        preview={preview}
        edit={edit}
        onCrop={onCrop}
        onClosedCrop={onClosedCrop}
        onBeforeFileLoad={onBeforeFileLoad}
      />
      <form className="mt-6">
        <InputComps
          value={basicInfo.fName}
          label={"First name"}
          type={"text"}
          name={"fName"}
          onChange={handleChange}
        />{" "}
        <InputComps
          value={basicInfo.lName}
          label={"Last name"}
          type={"text"}
          name={"lName"}
          onChange={handleChange}
        />{" "}
        <InputComps
          value={basicInfo.email}
          label={"Email address"}
          type={"email"}
          name={"email"}
          onChange={handleChange}
        />
        <FormLabel
          display="flex"
          ms="0px"
          marginBottom={"0px"}
          fontSize="sm"
          fontWeight="500"
          mb="px"
        >
          Your Bio
        </FormLabel>
        <Textarea
          value={yourBio}
          size="sm"
          onChange={(e) => setYourBio(e.target.value)}
          variant="filled"
          w={!isMobile ? "400px" : "100%"}
          resize={"none"}
        />
        <CancelUpdate onCancel={props.onCancel} onUpdate={props.onUpdate} />
      </form>
    </Flex>
  );
};
