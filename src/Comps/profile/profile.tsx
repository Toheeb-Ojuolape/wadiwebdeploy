import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState } from "react";
import { ImageListType } from "react-images-uploading";
import { JustBack } from "../buttons/justBack";
import { WadiButton } from "../buttons/wadiButton";
import { CountryInput } from "../input/countryInput";
import { GenderInput } from "../input/genderInput";
import { PhotoUpload } from "../input/uploadImage";

export const ProfileComp = () => {
  const [images, setImages] = useState([]);
  const [onBoardData, setData] = useState({});

  document.title = "Profile | Wadi";

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...onBoardData, [name]: value });
  };

  const fullData = [onBoardData, ...images];

  const click = () =>{console.log(fullData)}

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
    <>
    <FormControl>
      <PhotoUpload images={images} onChange={onChange} maxNumber={maxNumber} />
      <CountryInput handleChange={handleChange} />
      <GenderInput handleChange={handleChange} />
      <WadiButton
        text="Continue"
        onClick={click}
      />
    </FormControl>
    <JustBack/></>
  );
};
