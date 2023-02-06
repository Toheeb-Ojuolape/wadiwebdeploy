import { Box, Flex } from "@chakra-ui/react";


import { CalendarComps } from "../dashboardComps/calenderComps/calendarComps";





export const Calendar = (props: any) => {

  return (
    <Flex className="animate__animated animate__fadeIn">
      <Box padding={"20px"} width={"100vw"}>
      
        <CalendarComps />
      </Box>
 
    </Flex>
  );
};
