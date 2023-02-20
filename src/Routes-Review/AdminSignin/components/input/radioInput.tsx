import { Button, Text, Radio, Box } from "@chakra-ui/react";


export const RadioInput = (props: any) => {
  
  return (
    <div>
      
          <Button w='100%'  variant="outline" padding={'20px'}>
            <Text fontSize={'15px'} fontWeight={400}> {props.text}</Text>
            <Box width="100%" />
            <Radio name="toAchieve" value={props.value} />
          </Button>
      
    </div>
  );
};
