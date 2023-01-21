import { PhoneIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from "@chakra-ui/react";

export const SearchBar = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <InputGroup marginLeft="20px">
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon color={"grey"} />}
      />
      <Input
        onChange={props.onChange}
        type="text"
        size={"md"}
        borderRadius={"2xl"}
        placeholder="Search"
        w={!isMobile ? "300px" : "120px"}
        color={"black"}
      />
    </InputGroup>
  );
};
