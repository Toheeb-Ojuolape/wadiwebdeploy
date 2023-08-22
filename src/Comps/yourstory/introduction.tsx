import { FormControl } from "@chakra-ui/react";
import { useState } from "react";
import { emptyStoryPage, YourStory } from "../../Interface/yourStoryInterface";

import { JustBack } from "../buttons/justBack";
import { WadiButton } from "../buttons/wadiButton";
import { AbideTerms } from "../input/abideTermsInput";

import { IntroInput } from "../input/introductionInput";

export const IntroComp = () => {
  const [onBoardData, setData] = useState<YourStory>(emptyStoryPage);
  const [character, setCharacter] = useState(160);

  document.title = "Profile | Wadi";

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...onBoardData, [name]: value });

    console.log(onBoardData);
    if (name === "about") {
      setCharacter(160 - value.length);
    }
  };

  return (
    <>
      <FormControl>
        <IntroInput
          handleChange={handleChange}
          value={onBoardData.about}
          character={character}
        />

        <AbideTerms handleChange={handleChange} value={onBoardData.tAndC} />
        <WadiButton onClick={handleChange} isLoading={false} text="Continue" />
      </FormControl>
      <JustBack />
    </>
  );
};
