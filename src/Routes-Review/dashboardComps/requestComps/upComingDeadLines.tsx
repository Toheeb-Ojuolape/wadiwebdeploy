import { Center, Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { SelectContent2 } from "../projectComps/selectContent";
import { EventsComps } from "./eventsComps";
import { AllProjectsButton, SelectContent } from "./selectContent";
const eventList = [
  {
    event: "How to build a successful startup",
    date: "June 25, 2023",
    time: "10:00 AM",
    tag: "Overdue",
  },
  {
    event: " From Final Year Project/Thesis to Published Journal",
    date: "June 28, 2023",
    time: "10:00 AM",
    tag: "Webinar",
  },
  {
    event: "Publish Journal",
    date: "June 31, 2023",
    time: "10:00 AM",
    tag: "Webinar",
  },
  {
    event: "Webinar: How to build a successful business",
    date: "June 31, 2023",
    time: "10:00 AM",
    tag: "Workshop",
  },
];
const dates = ["2023", "2024", "2025", "All"];
const query = ["Environmental", "Social", "Economic", "All"];

export const UpComingComps = (props: any) => {
  return (
    <Flex
      bg={"white"}
      borderRadius="lg"
      flexWrap="wrap"
      w=""
      h="full"
      padding={"20px"}
    >
      <GeneralHeadingComp
        title="Upcoming Deadlines"
   
      />
       <SelectContent2 placeholder={dates[0]} options={dates} />
        <SelectContent2 placeholder={query[0]} options={query} />
      
      {/* {eventList.map((events, index) => {
        return <EventsComps key={index} {...events} />;
      })} */}

      {eventList.length > 0 ? (
        <div className="overflow-auto max-h-[600px] w-full">
          {eventList.map((item, index) => (
            <EventsComps key={index} {...item} />
          ))}
        </div>
      ) : (
        <div>No Events</div>
      )}
    </Flex>
  );
};


export const GeneralHeadingComp = (props: {
  title: string;
}) => {
  return (
    <Flex w="100%">
      <Center p="4">
        <Text fontSize="20px" fontWeight={"extrabold"}>
          {props.title}
        </Text>
      </Center>
      <Spacer />
      <Center w="fit-content" flexWrap={"wrap"} p="4" flexDirection={"row"}>
        <AllProjectsButton text="Manage" />
      </Center>
    </Flex>
  );
};
