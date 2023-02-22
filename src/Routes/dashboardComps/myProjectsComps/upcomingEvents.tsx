import {
  Box,
  Center,
  Flex,
  Skeleton,
  Spacer,
  Text
} from "@chakra-ui/react";
import { EventsComps } from "./eventsComps";
import { SelectContent } from "./selectContent";


export const UpComingComps = (props: any) => {
  const eventData = props.eventData || { events: [] };
  console.log(
    "🚀 ~ file: upcomingEvents.tsx:16 ~ UpComingComps ~ eventData",
    eventData
  );

  return (
    <Flex
      bg={"white"}
      borderRadius="lg"
      flexWrap="wrap"
      h="full"
      padding={"20px"}
      width='100%'
    >
      <GeneralHeadingComp
        title="Upcoming Events"
        placeholder={dates[0]}
        options={dates}
      />
      {/* {eventList.map((events, index) => {
        return <EventsComps key={index} {...events} />;
      })} */}

      {eventData.events.length > 0 ? (
        <div className="overflow-auto max-h-[600px] w-full min-h-[350px]">
          {eventData.events.map((item: any, index: Number) => (
            <EventsComps key={index} {...item} />
          ))}
        </div>
      ) : (
        <div className="overflow-auto max-h-[600px] w-full min-h-[350px]">
          <Box width={'100%'}>
            <Skeleton mt='10px' height="80px" />
          </Box>
        </div>
      )}
    </Flex>
  );
};
const dates = ["2021", "2022", "2023", "2024", "2025"];

export const GeneralHeadingComp = (props:any) => {

  return (
    <Flex w="100%" h="fit-content">
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
