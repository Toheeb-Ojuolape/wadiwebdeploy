import { FormLabel, Select } from "@chakra-ui/react";
import countries from "country-list";
import { upperFirst } from "lodash";
import { useState } from "react";

export const CountryInput = (props: any) => {
  const countryNames = Object.keys(countries.getNameList());

  
  return (
    <div className="mb-6">
      <FormLabel>Where do you live?</FormLabel>
      <Select placeholder="Select country" onChange={(e)=>{console.log(e.target.value)}}>
        {countryNames.map((country, index) => {
          return <option key={index}>{upperFirst(country)}</option>;
        })}
      </Select>
    </div>
  );
};
