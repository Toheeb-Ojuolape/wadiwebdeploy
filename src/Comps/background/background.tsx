import { FormControl} from "@chakra-ui/react";
import { useState } from "react";
import { JustBack } from "../buttons/justBack";
import { WadiButton } from "../buttons/wadiButton";
import { InstitutionInput } from "../input/institutionInput";
import { SpecializationInput } from "../input/specializationInput";
import { TitleInput } from "../input/titleInput";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../db";
import { useNavigate } from "react-router-dom";


export const BackgroundComp = () => {
  const [title,setTitle] = useState("")
  const [specialization,setSpecialization] = useState("")
  const [institution,setInstitution] = useState("")
  const wadiKey = localStorage.getItem("wadiKey")
  const [loading,setLoading] = useState(false)
  const history = useNavigate()


  document.title = "Profile | Wadi";


  const moveNext = () =>{
    if (wadiKey !== null) {
    setLoading(true)
    const docRef = doc(db,"users",wadiKey)
    setDoc(docRef,{
      title:title,
      specialization:specialization,
      institution:institution
    },{merge:true}).then(()=>{
      history("/onboarding/achieve")
    })
  }
  }






  return (
    <>
      <FormControl>
        <SpecializationInput handleChange={(e:any)=>setSpecialization(e.target.value)} />
        <InstitutionInput handleChange={(e:any)=>setInstitution(e.target.value)} />
        <TitleInput handleChange={(e:any)=>setTitle(e.target.value)}/>
        <WadiButton onClick={moveNext} loading={loading}  text="Continue" />
      </FormControl>
      <JustBack />
    </>
  );
};
