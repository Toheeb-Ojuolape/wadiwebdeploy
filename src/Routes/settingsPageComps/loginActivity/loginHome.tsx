import { Avatar, Box, Button, Flex, HStack, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { GoBackto } from "../goBackto";
import { getAuth,signOut } from "firebase/auth";
import {useState} from "react"

export const LoginHome = (props: any) => {
 const [isMobile] = useMediaQuery("(max-width: 700px)");
 const [loading,setLoading] = useState(false)

 const logOut = () =>{
  setLoading(true)
  const auth = getAuth()
  signOut(auth).then((response)=>{
    console.log(response)
    localStorage.removeItem("wadiKey")
    window.location.href="/login"
    setLoading(false)
  })
}

    return (
    <Flex flexDirection={"column"} className="animate__animated animate__fadeIn">
        <Box mb='30px' w='fit-content'><GoBackto name='Login activity'/></Box>
      <HStack mb="10px">
        <Box>
          <Avatar src={props.userData.photoURL}/>
        </Box>
        <Box>
          <Text fontWeight={'bolder'}>{props.userData.firstName} {props.userData.lastName}</Text>
          <Text fontSize={'sm'} color='rgba(71, 84, 103, 1)'>{props.userData.title}</Text>
        </Box>
      </HStack>
      <Text>This will log you of of your account</Text>
      <Text color={'rgba(71, 84, 103, 1)'} fontSize='12px' w={!isMobile ? '600px' : "fit-content"}>
        
      </Text>
      <Flex>
        <Spacer/>
        <Button isLoading={loading} onClick={logOut} bg="rgba(240, 68, 56, 1)" color="white">
          Log out
        </Button>
      </Flex>
    </Flex>
  );
};
