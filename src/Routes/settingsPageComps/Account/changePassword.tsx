import {
  Flex,
  Box,
  Spacer,
  Button,
  useDisclosure,
  FormControl,
} from "@chakra-ui/react";
import { GoBackto } from "../goBackto";
import { ReviewModalComps } from "../modalComps/modalComps";
import { PasswordInput } from "../passwordInput";
import { getAuth, updatePassword } from "firebase/auth";
import {useState} from "react"
import Swal from "sweetalert2";

export const ChangePassword = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPassword,setNewPassword] = useState("")
  const [confirmNewPassword,setConfirmNewPassword] = useState("")
  const [loading,setLoading] = useState(false)
  const auth = getAuth()
  const user = auth.currentUser

  const changePassword = () =>{
  if(newPassword ==='' || confirmNewPassword ===''){
    Swal.fire({
      icon:"warning",
      title:"Password Not Set",
      text:"Please enter your password",
      confirmButtonColor:"#0066f5"
    })
    return
  }
  if(newPassword !== confirmNewPassword){
    Swal.fire({
      icon:"warning",
      title:"Password Not Set",
      text:"New Password and Confirm Password are not the same",
      confirmButtonColor:"#0066f5"
    })
  }
  if(user){
  setLoading(true)
  updatePassword(user,newPassword).then(()=>{
    onOpen()
    setLoading(false)
  }).catch((error)=>{
    setLoading(false)
    Swal.fire({
      icon:"warning",
      title:"Password Not Set",
      text:error.message,
      confirmButtonColor:"#0066f5"
    })
  })
}
  }
  return (
    <Flex
      className="animate__animated animate__fadeIn"
      flexDirection={"column"}
      w="100%"
    >
      <Box w="fit-content" mb="30px">
        {" "}
        <GoBackto name="Change Password" />
        <Spacer />
      </Box>

      <Box w="fit-content">
        <FormControl isRequired>
          <PasswordInput
            name={"cPassword"}
            label={"Current password"}
            mb={"40px"}
            handleChange={props.handleChange}
          />
          <PasswordInput
            name={"newPassword"}
            label={"New password"}
            mb={"10px"}
            handleChange={(e:any)=>setNewPassword(e.target.value)}
          />
          <PasswordInput
            name={"confirmPassword"}
            label={"Confirm password"}
            mb={"20px"}
            handleChange={(e:any)=>setConfirmNewPassword(e.target.value)}
          />
        </FormControl>
      </Box>
      <Box>
        <Button
          variant={"outline"}
          borderColor="rgba(43, 95, 208, 1)"
          color="rgba(43, 95, 208, 1)"
          mr="10px"
          size={"sm"}
        >
          Cancel
        </Button>
        <Button
          onClick={changePassword}
          size={"sm"}
          bg="rgba(43, 95, 208, 1)"
          variant={"outline"}
          borderColor="rgba(43, 95, 208, 1)"
          color="white"
          isLoading={loading}
        >
          Change
        </Button>

        <ReviewModalComps
          isOpen={isOpen}
          onClose={onClose}
          title={"Your password is updated"}
          subtitle={
            "You have successfully changed your password. we will log you out in a few seconds, you can use your new password to log back in."
          }
        />
      </Box>
    </Flex>
  );
};
