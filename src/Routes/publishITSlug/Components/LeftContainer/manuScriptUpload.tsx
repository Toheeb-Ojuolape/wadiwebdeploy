import { Box, Center, IconButton, Text, useMediaQuery } from "@chakra-ui/react";
import { DocumentUpload } from "iconsax-react";
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["DOCX"];


export default function ManuScript(props: any) {
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  return (
    <Box w={!isMobile ? "400px": "100%"}>
      <Text mb="10px">Upload manuscript </Text>
      <FileUploader
        icon={false}
        multiple={true}
        label="Upload Manuscript"
        handleChange={props.uploadFile}
        name="file"
        types={fileTypes}
        children={<UploadBox file={props.file}/>}
      />
   
    </Box>
  );
}

const UploadBox = (props:any) => {
  return (
    <Center flexDirection={'column'} border='1px solid rgba(208, 213, 221, 1)' padding='20px' borderRadius={'lg'} > 
     <IconButton icon={<DocumentUpload />} colorScheme='blue' size='lg' mb='10px' aria-label={""}/>
      <Text align={'center'} color={'rgba(102, 112, 133, 1)'}>    {props.file[0]
          ? `File name: ${props.file[0].name}`
          : "Browse and chose the files you want to upload from your computer"}</Text>

    </Center>
  );
};
