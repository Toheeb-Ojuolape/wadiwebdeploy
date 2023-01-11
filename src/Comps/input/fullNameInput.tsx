import { FormLabel, useColorModeValue, Text, Input } from "@chakra-ui/react";

export const FullNameInput = (props: any) => {
  const textColor = useColorModeValue("navy.700", "white");


    const brandStars = useColorModeValue("brand.500", "brand.400");

    return (
      <>
        <FormLabel
          display="flex"
          ms="0px"
          marginBottom={'10px'}
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="px"
        >
         Full Name<Text color={brandStars}></Text>
        </FormLabel>
        <Input
          name="fullName"
          isRequired={true}
          variant="auth"
          value={props.value}
          border={"1px solid rgba(101, 108, 117, 0.37)"}
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="Morgan Freeman"
          mb="24px"
          fontWeight="500"
          onChange={props.handleChange}
          _active={{ bg: "rgba(101, 108, 117, 0.37)" }}
        />
        
      </>
    );
  };

