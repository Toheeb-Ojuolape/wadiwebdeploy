import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color={'grey'} />}
      />
      <Input type="text" placeholder="Search"  w='400px' color={'black'}/>
    </InputGroup>
  );
};
