import { Box, Flex } from "@chakra-ui/react";


import { CalendarComps } from "../dashboardComps/calenderComps/calendarComps";





export const Calendar = (props: any) => {

  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
      
        <CalendarComps />
      </Box>
 
    </Flex>
  );
};
