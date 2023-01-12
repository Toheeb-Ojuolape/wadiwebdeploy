import { FormControl, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

import { JustBack } from "../buttons/justBack";
import { WadiButton } from "../buttons/wadiButton";

import { InstitutionInput } from "../input/institutionInput";
import { RadioInput } from "../input/radioInput";
import { SpecializationInput } from "../input/specializationInput";
import { TitleInput } from "../input/titleInput";

export const AchieveComp = () => {
  const [onBoardData, setData] = useState("1");

  document.title = "Profile | Wadi";

  return (
    <>
      <FormControl>
        <RadioGroup onChange={setData} value={onBoardData}>
          <Stack direction="column">
            <RadioInput text='Review your project' value='1'/>
            <RadioInput text='Join our community' value='2'/>
            <RadioInput text='Improve research skills' value='3'/>
            <RadioInput text='Send lab samples' value='4'/>
            <RadioInput text='Not sure' value='5'/>
          </Stack>
        </RadioGroup>
        <div className="mb-6"/>
        <WadiButton text="Continue" />
      </FormControl>
      <JustBack />
    </>
  );
};
