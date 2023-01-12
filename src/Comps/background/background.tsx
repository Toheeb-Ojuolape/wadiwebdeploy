import { FormControl} from "@chakra-ui/react";
import { useState } from "react";

import { JustBack } from "../buttons/justBack";
import { WadiButton } from "../buttons/wadiButton";

import { InstitutionInput } from "../input/institutionInput";
import { SpecializationInput } from "../input/specializationInput";
import { TitleInput } from "../input/titleInput";


export const BackgroundComp = () => {
  const [onBoardData, setData] = useState({});

  document.title = "Profile | Wadi";

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...onBoardData, [name]: value });
  };

  return (
    <>
      <FormControl>
        <SpecializationInput handleChange={handleChange} />
        <InstitutionInput handleChange={handleChange} />
        <TitleInput handleChange={handleChange} />
        <WadiButton text="Continue" />
      </FormControl>
      <JustBack />
    </>
  );
};
