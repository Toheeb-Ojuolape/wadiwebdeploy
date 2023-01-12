import { Button, Text, Radio, RadioGroup, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";

export const RadioInput = (props: any) => {
  
  return (
    <div>
      
          <Button w='100%'  variant="outline">
            <Text fontSize={'15px'} fontWeight='medium'> {props.text}</Text>
            <Box width="100%" />
            <Radio name="toAchieve" value={props.value} />
          </Button>
      
    </div>
  );
};
