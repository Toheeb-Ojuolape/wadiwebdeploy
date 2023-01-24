import { PhoneIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from "@chakra-ui/react";
import {SearchNormal1 } from "iconsax-react";

export const SearchBar = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <InputGroup marginLeft="20px">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchNormal1 color={"grey"} size='20px' />}
      />
      <Input
        onChange={props.onChange}
        type="text"
        size={"md"}
        borderRadius={"2xl"}
        placeholder="Search"
        w={!isMobile ? "100%" : "120px"}
        color={"black"}
      />
    </InputGroup>
  );
};
