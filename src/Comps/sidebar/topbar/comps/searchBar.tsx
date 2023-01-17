import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, useMediaQuery } from "@chakra-ui/react";

export const SearchBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color={'grey'} />}
      />
      <Input type="text" placeholder="Search"  w= {!isMobile ? '400px': '200px'} color={'black'}/>
    </InputGroup>
  );
};
