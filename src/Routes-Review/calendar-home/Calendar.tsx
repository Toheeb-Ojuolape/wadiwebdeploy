import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { CalendarComps } from "../dashboardComps/calenderComps/calendarComps";


import { Loading } from "../loading/loading";


export const Calendar = (props: any) => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    console.log("My component has finished rendering");
  }, []);
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        <Loading loading={loading} />
      
        <CalendarComps />
      </Box>
 
    </Flex>
  );
};
