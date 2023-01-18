import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, useMediaQuery } from "@chakra-ui/react";

export const SearchBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <InputGroup marginLeft='20px'>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color={'grey'} />}
      />
      <Input type="text"  borderRadius={'2xl'} placeholder="Search"  w= {!isMobile ? '300px': '200px'} color={'black'}/>
    </InputGroup>
  );
};
