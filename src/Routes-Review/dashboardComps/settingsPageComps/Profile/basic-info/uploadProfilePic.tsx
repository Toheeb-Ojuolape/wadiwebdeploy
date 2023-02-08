import React from "react";

import { useState } from "react";
import { Avatar, useDisclosure } from "@chakra-ui/react";
import { PicModal } from "./modal";

export const UploadProfilePic = () => {
  const [preview, setPreview] = useState('');
  function onClosedCrop() {
    setPreview('');
  }
  function onCrop(pv: any) {
    setPreview(pv);
  
  }
  function onBeforeFileLoad(elem: any) {
    if (elem.target.files[0].size > 79160080) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Avatar src={preview} cursor={'pointer'} onClick={onOpen} />
      <PicModal isOpen={isOpen} onClose={onClose} onCrop={onCrop} onClosedCrop={onClosedCrop} onBeforeFileLoad={onBeforeFileLoad}/>
     
    </div>
  );
};
