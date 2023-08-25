import {
  Center,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

export const Progress = (props: { percentage: any }) => {
  return (
    <Center borderRadius={"md"}>
      <CircularProgress  thickness='8px'  value={props.percentage} color="#2b5fd0">
        <CircularProgressLabel>{`${props.percentage} %`}</CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
};
