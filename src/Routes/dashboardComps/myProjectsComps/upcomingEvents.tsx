import { Center, Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { EventsComps } from "./eventsComps";
import { SelectContent } from "./selectContent";
const eventList = [
  {
    event: "From Final Year Project/Thesis to Published Journal",
    date: "anytime",
    time: "anytime",
    tag: "Webinar",
  },
  
];

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
        title="Upcoming Events"
        placeholder={dates[0]}
        options={dates}
      />
      {/* {eventList.map((events, index) => {
        return <EventsComps key={index} {...events} />;
      })} */}


       {eventList.length > 0 ?  
       (<div className='overflow-auto max-h-[600px] w-full'>
          {eventList.map((item, index) => (
          <EventsComps key={index} {...item} />
          ))}
        </div>): (<div>No Events</div>)}
      
    </Flex>
  );
};
const dates = ["2021", "2022", "2023", "2024", "2025"];

export const GeneralHeadingComp = (props: {
  title: string;
  placeholder: string;
  options: string[] | [] | number[];
}) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex w="100%">
      <Center p="4">
        <Text fontSize="20px" fontWeight={"extrabold"}>
          {props.title}
        </Text>
      </Center>
      <Spacer />
      <Center w="fit-content" flexWrap={"wrap"} p="4" flexDirection={"row"}>
        <SelectContent
          placeholder={props.placeholder}
          options={props.options}
        />
      </Center>
    </Flex>
  );
};
