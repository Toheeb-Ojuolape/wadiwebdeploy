import { FormControl, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { JustBack } from "../buttons/justBack";
import { WadiButton } from "../buttons/wadiButton";
import { RadioInput } from "../input/radioInput";
import { useNavigate } from "react-router-dom";
import { db } from "../../db";
import {doc,setDoc} from "firebase/firestore"
import Swal from "sweetalert2";

export const AchieveComp = () => {
  const [onBoardData, setData] = useState("");
  const history = useNavigate()
  const [loading,setLoading] = useState(false)
  const wadiKey = localStorage.getItem("wadiKey")

  document.title = "Profile | Wadi";


 const moveToNext = () =>{
  if(wadiKey !== null){
  setLoading(true)
  const docRef = doc(db,"users",wadiKey)
  setDoc(docRef,{
    purpose:onBoardData
  },{merge:true}).then(()=>{
    setLoading(false)
    history("/dashboard/home")
  })
  }
  else{
    Swal.fire({
      icon:"error",
      title:"You don't have permission to do this"
    })
  }
}
  return (
    <>
      <FormControl>
        <RadioGroup onChange={(e)=>setData(e)} value={onBoardData}>
          <Stack direction="column">
            <RadioInput text='Review your project' value='Review your project'/>
            <RadioInput text='Join our community' value='Join our community'/>
            <RadioInput text='Improve research skills' value='Improve research skills'/>
            <RadioInput text='Send lab samples' value='Send lab samples'/>
            <RadioInput text='Not sure' value='Not sure'/>
          </Stack>
        </RadioGroup>
        <div className="mb-6"/>
        <WadiButton loading={loading} onClick={moveToNext} text="Continue" />
      </FormControl>
      <JustBack />
    </>
  );
};
