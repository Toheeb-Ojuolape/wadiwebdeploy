import { FormLabel, Input} from "@chakra-ui/react";


export const TitleInput = (props: any) => {
  

  
  return (
    <div>
      <FormLabel>What is your title?</FormLabel>
      <Input
          name="title"
          isRequired={true}
          variant="auth"
          value={props.value}
          border={"1px solid rgba(101, 108, 117, 0.37)"}
          fontSize="sm"
          ms={{ base: "0px", md: "0px" }}
          type="text"
          placeholder="e.g Professor"
          mb="24px"
          fontWeight="500"
          onChange={props.handleChange}
          _active={{ bg: "rgba(101, 108, 117, 0.37)" }}
        />
    </div>
  );
};
