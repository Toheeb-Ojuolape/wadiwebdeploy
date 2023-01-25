import {
    Box,
    Button,
    Center,
    Flex,
    Text
  } from "@chakra-ui/react";
  import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
  import { useState } from "react";
  
  export const SubButton = (props: {onClick?: any,isActive?: boolean,icon:ReactJSXElement, name: string}) => {
    const [Blue, setBlue] = useState("none");
    console.log(props.isActive);
  
    const handleClick = (e: any) => {};
  
    return (
  
      <Button
        width="100% "
        justifyContent="flex-start"
        ml={"10px"}
        onClick={props.onClick}
       
        pt="10px"
        pb="10px"
        pl='30px'
        
        mb={"5px"}
        background={props.isActive ? "rgba(248, 248, 248, 1)" : ""}
        borderRadius="6px"
        className="cursor-pointer"
        _hover={{
          bg: "rgba(248, 248, 248, 1)",
        }}
      >
        <Flex>
          <Box height="fit-content" paddingRight="2">
            {props.icon}
          </Box>
          <Box w="" height="fit-content">
           <Text fontSize={'13px'}> {props.name}</Text>
          </Box>
          <Box
            position={"absolute"}
            right={0}
            bottom='0.5'
            display={props.isActive ? "block" : "none"}
            _hover={{ display: "block" }}
            mr="10px"
          >
            <Center
            
              bg="rgba(43, 95, 208, 1)"
              borderRadius={"10px 0px 0px 10px"}
              w="3px"
              height="35px"
            ></Center>
           
          </Box>
        </Flex>
      </Button>
    );
  };
  