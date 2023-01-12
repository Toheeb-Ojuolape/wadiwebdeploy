import { AddIcon } from "@chakra-ui/icons";
import { Avatar, Box, Center, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

export const PhotoUpload = (props: any) => {
  const { images, onChange, maxNumber } = props;
  const [profileImage, setprofileImage] = useState(false);
  console.log(images);
  return (
    <div className="mb-5">
      <Text mb="15px" fontSize="15px">
        Upload your profile picture
      </Text>
      <HStack spacing="2px" justify={"center"}>
        <Box w="40%" h="100px">
          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }: any) => (
              <div className="upload__image-wrapper">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  {!imageList[0] ? (
                    <div
                      className=" cursor-pointer w-16 h-16 rounded-full bg-[#d4dae2] flex items-center justify-center hover:w-12 hover:h-12 "
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <AddIcon />
                    </div>
                  ) : null}
                  {imageList[0] ? (
                    // <img
                    //   className="cursor-pointer w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center"
                    //   src={imageList[0].dataURL}
                    //   alt=""
                    //   width="100"
                    // />
                    <Avatar size="lg" src={imageList[0].dataURL} />
                  ) : null}
                </div>
                &nbsp;
                {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              </div>
            )}
          </ImageUploading>
        </Box>
        <Box w="100%" h="50px">
          <Text fontSize="15px" fontWeight="extrabold" color="#2B5FD0">
            {images.length !==1 ? "Select a file" : "✅"}
          </Text>
          <Text fontSize="12px" color={"#656C75"}>
            Make sure the file is below 2mb
          </Text>
        </Box>
      </HStack>
    </div>
  );
};
