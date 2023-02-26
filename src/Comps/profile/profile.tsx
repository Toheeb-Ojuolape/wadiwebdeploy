import {
  FormControl,
  // , FormLabel, Select
} from "@chakra-ui/react";
import { useState } from "react";
import { ImageListType } from "react-images-uploading";
import { JustBack } from "../buttons/justBack";
import { WadiButton } from "../buttons/wadiButton";
import { CountryInput } from "../input/countryInput";
import { GenderInput } from "../input/genderInput";
import { PhotoUpload } from "../input/uploadImage";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../db";
import {
  ref,
  getDownloadURL,
  uploadString,
  getStorage,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";



export const ProfileComp = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const history = useNavigate()


  document.title = "Profile | Wadi";

  const wadiKey = localStorage.getItem("wadiKey");

  const click = async () => {
    if (wadiKey !== null) {
      setLoading(true);
      const docRef = doc(db, "users", wadiKey);
      const auth: any = getAuth();
      updateProfile(auth.currentUser, {
        photoURL: image,
      }).then(() => {
        setDoc(
          docRef,
          {
            country: country,
            gender: gender,
            photoURL:image
          },
          { merge: true }
        ).then(()=>{
          setLoading(false)
          history("/onboarding/background")
        })
      });
    }
  };

  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[])
    const images = imageList[0];
    //upload image here
    // Create the file metadata
    /** @type {any} */
    if (wadiKey !== null && images.dataURL) {
      const storage = getStorage();
      const storageRef = ref(storage, wadiKey);
      
      uploadString(storageRef, images.dataURL.split(",")[1], "base64")
      .then(async (snapshot) => {
        const uploadedImage = await getDownloadURL(snapshot.ref)
        setImage(uploadedImage)

        
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
    }

   
  };
  return (
    <>
      <FormControl>
        <PhotoUpload
          images={images}
          onChange={onChange}
          maxNumber={maxNumber}
        />
        <CountryInput handleChange={(e: any) => setCountry(e.target.value)} />
        <GenderInput handleChange={(e: any) => setGender(e.target.value)} />
        <WadiButton loading={loading} text="Continue" onClick={click} />
      </FormControl>
      <JustBack />
    </>
  );
};
