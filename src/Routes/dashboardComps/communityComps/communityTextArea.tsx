import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import {useState} from "react"
import Swal from "sweetalert2";
import slugify from "slugify";
import { db } from "../../../db";
import { doc,setDoc } from "firebase/firestore"

export const CommunityTextArea = (props: any) => {
  const [title,setTitle] = useState("")
  const [category,setCategory] = useState("")
  const [question,setQuestion] = useState("")
  const [loading,setLoading] = useState(false)


  const submitQuestion =() =>{
    console.log(title,category,question)
    if(title === ""){
      Swal.fire({
        title: 'Question not submitted!',  
        text: "You need to enter your question",  
        icon: 'error',  
        confirmButtonColor:"#2b5fd0",  
        confirmButtonText: 'Ok'
      })
      return
    }

    if(question === ""){
      Swal.fire({
        title: 'Question not submitted!',  
        text: "You need to enter more information about your question for your question",  
        icon: 'error',  
        confirmButtonColor:"#2b5fd0",   
        confirmButtonText: 'Ok'
      })
      return
    }
    if(category === ""){
      Swal.fire({
        title: 'Question not submitted!',  
        text: "You need to select a question category",  
        icon: 'error',  
        confirmButtonColor:"#2b5fd0",   
        confirmButtonText: 'Ok'
      })
      return
    }
   else{
    setLoading(true)
      const slug =  slugify(title,{
        replacement: "-",
        remove: /[$*_+~.()'"!?\-:@]/g,
        lower: true,
       })
      const docRef = doc(db,'forum',slug);
      setDoc(docRef, {
        slug:slug,
        topic:title,
        description: question,
        name: props.userData.firstName+" "+props.userData.lastName,
        image: props.userData.photoURL,
        category: category,
        email:props.userData.email,
        title:title,
        timestamp:Date.now(),
        votes:0,
        answers:[]
      }).then(() => {
        setLoading(false)
        window.location.reload();
      }).catch((error)=>{
        setLoading(false)
        console.log(error)
      })
    }
  }

  return (
    <Flex flexDirection={"column"} mt="20px">
      <Box borderRadius="lg" border={'1px solid rgba(229, 235, 244, 1)'} padding={"20px"}>
        {" "}
        <label>Title</label>
        <Input
         name= 'title'
          placeholder="Title"
          resize={"none"}
          onChange={(e)=>setTitle(e.target.value)}
          border="0 "
          mb={"20px"}
          bg="white"
        />

        <label>Categories</label>
        <Select onChange={e => setCategory(e.target.value)}>
        <option defaultValue="">
                All Categories
              </option>
              <option value="Art">Art</option>
              <option value="Energy">Energy</option>
              <option value="Engineering">Engineering</option>
              <option value="Environment">Environment</option>
              <option value="Geoscience">Geoscience</option>
              <option value="History">History</option>
              <option value="Humanities">Humanities</option>
              <option value="Medicine">Medicine</option>
              <option value="Politics">Politics</option>
              <option value="Programming">Programming</option>
              <option value="Social Science">Social Science</option>
              <option value="Scholarships">Scholarships</option>
              <option value="Science">Science</option>
              <option value="Space">Space</option>
              <option value="Technology">Technology</option>
        </Select>

        <div className="mt-4">
        <label>Question</label>
        <Textarea
        name ='body'
          bg={"white"}
          border={"0"}
          placeholder="Type your Questions here"
          resize={"none"}
          onChange={(e)=>setQuestion(e.target.value)}
        />
        </div>
      </Box>
      <Flex mt="20px">
        <Spacer />
        <HStack>
          {/* <PaperClip  /> */}

          <Button
            color={"white"}
            borderRadius="full"
            bg="rgba(43, 95, 208, 1)"
            isLoading={loading}
            onClick={submitQuestion}
          >
            Send
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};
