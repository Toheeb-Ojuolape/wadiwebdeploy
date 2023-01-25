import {
  Center,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

export const Progress = (props: { percentage: any }) => {
  return (
    <Center borderRadius={"md"}>
 
      <CircularProgress  thickness='8px'  value={props.percentage} color="rgba(99, 97, 249, 1)">
        <CircularProgressLabel>{`${props.percentage} %`}</CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
};
