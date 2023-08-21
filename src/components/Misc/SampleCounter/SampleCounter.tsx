import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import "./SampleCounter.css";
import { useState } from "react";

function SampleCounter(props: { setSample: Function }) {
  const [samples, setSamples] = useState(0);

  const decreaseCount = () =>{
    if(samples ===0){
      return 
    }
    setSamples(samples-1)
    props.setSample(samples-1)
  }

  const increaseCount = () =>{
    setSamples(samples+1)
    props.setSample(samples+1)
  }

  return (
    <div className="sampleCounter">
      <Button onClick={decreaseCount}>
        <ChevronLeftIcon />
      </Button>
      <span>{samples}</span>
      <Button onClick={increaseCount}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

export default SampleCounter;
