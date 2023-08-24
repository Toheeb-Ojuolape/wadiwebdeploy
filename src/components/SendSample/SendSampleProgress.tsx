import { Progress } from "@chakra-ui/react";

function SendSampleProgress(props: { percentage: number }) {
  return (
    <div className="my-3 relative">
      <Progress rounded={"xl"} value={props.percentage} width={"90%"} />
      <div className="absolute percentNumber">{props.percentage}%</div>
    </div>
  );
}

export default SendSampleProgress;
