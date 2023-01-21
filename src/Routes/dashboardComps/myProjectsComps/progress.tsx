import { Center , Text} from "@chakra-ui/react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export const Progress = (props: { percentage: any }) => {
  return (
    <Center w='40px' h='40px' borderRadius={'md'}  bg='rgba(242, 249, 253, 1)'>
      {/* <CircularProgressbar
        value={props.percentage}
        text={`${props.percentage}%`}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "32px",
          textColor: "rgba(99, 97, 249, 1)",

          pathColor: "rgba(99, 97, 249, 1)",
        })}
      /> */}
      <Text fontSize={'12px'} fontWeight='bold'>{`${props.percentage}`}</Text>
    </Center>
  );
};
