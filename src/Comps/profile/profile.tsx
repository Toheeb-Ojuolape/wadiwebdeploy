import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState } from "react";
import { ImageListType } from "react-images-uploading";
import { CountryInput } from "../input/countryInput";
import { GenderInput } from "../input/genderInput";
import { PhotoUpload } from "../input/uploadImage";


export const ProfileComp = () => {

  const [images, setImages] = useState([]);
  const [onBoardData, setData] = useState({});

  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };
  return (
    <FormControl>
      <PhotoUpload images={images} onChange={onChange} maxNumber={maxNumber} />
      <CountryInput  />
      <GenderInput/>
    </FormControl>
  );
};
