import { FormLabel, Select } from "@chakra-ui/react";
import countries from "country-list";
import { upperFirst } from "lodash";


export const CountryInput = (props: any) => {
  const countryNames = Object.keys(countries.getNameList());

  return (
    <div className="mb-6">
      <FormLabel>Where do you live?</FormLabel>
      <Select
        name="country"
        placeholder="Select country"
        onChange={props.handleChange}
      >
        {countryNames.map((country, index) => {
          return <option key={index}>{upperFirst(country)}</option>;
        })}
      </Select>
    </div>
  );
};
