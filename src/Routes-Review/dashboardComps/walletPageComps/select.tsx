import { Select, useMediaQuery } from "@chakra-ui/react";
import { Calendar } from "iconsax-react";

export const SelectContent = (props: { placeholder: string; options: any }) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Select
      mb="10px"
      fontSize={"13px"}
      ml={!isMobile ? "5" : "0"}
      w={!isMobile ? "fit-content" : "100%"}
      size={isMobile ? "sm" : "md"}
      icon={<Calendar/>}
    >
      {props.options.map((option: any,index:number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};