import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { events } from "./events";

import "./react-big-calendar.css";
import { Box } from "@chakra-ui/react";
const localizer = momentLocalizer(moment);


export const CalendarComps = (props: any) => (
    // change the button styles here
    
  <Box bg='white' padding='20px' borderRadius={'md'}>
    <Calendar
      localizer={localizer}
      events={events}
      
      startAccessor="start"
      endAccessor="end"
      style={{ height: "100vh" }}
    />
  </Box>
);
