import { Button, Select, useMediaQuery } from "@chakra-ui/react";

export const SelectContent = (props: {placeholder: string, options: any}) => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Select fontSize={'13px'} ml={!isMobile ? '5': '0'}  w={!isMobile ? "fit-content": "100%"} size={isMobile ? 'sm': "md"}>
      {props.options.map((option: any) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export const AllProjectsButton = (props: any) => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
    return (
        <Button
        ml={!isMobile ? '5': '0'}
     
        fontSize="sm"
        variant="brand"
        fontWeight="500"
        size={isMobile? 'sm' : "md"}
        width={isMobile ? "100%" : "fit-content"}
     
        bg={"rgba(43, 95, 208, 1)"}
        color="white"
        onClick={(e)=>{props.onClick()}}
        fontFamily={""}
        _hover={{ bg: "white",color:"rgba(43, 95, 208, 1)",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)" }}
        isLoading={props.isLoading}
      >
        All Projects
      </Button>
    );
  };