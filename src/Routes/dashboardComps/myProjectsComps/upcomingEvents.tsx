import { Center, Flex, Spacer, Text, useMediaQuery} from "@chakra-ui/react"
import { EventsComps } from "./eventsComps";
import { SelectContent } from "./selectContent";
const eventList = [
    {
        event: "How to build a successful startup",
        date: "June 25, 2023",
        time: "10:00 AM",
        tag: "Webinar",
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
]

export const UpComingComps = (props: any) => {
    return (
    <Flex bg={'white'}  borderRadius='lg' flexWrap='wrap'w='' h='full' padding={'20px'}>
<UPcomingHeading />
{eventList.map((events, index) => {return (<EventsComps key={index} {...events}/>)})}

    </Flex>
    )
}
const dates = ["2021", "2022", "2023", "2024", "2025"];


const UPcomingHeading = (props: any) => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
    return (
      <Flex w='100%'>
        <Center p="4">
          <Text  fontSize="20px" fontWeight={"extrabold"}>
          Upcoming Events
          </Text>
        </Center>
        <Spacer />
        <Center
    
          w="fit-content"
          flexWrap={"wrap"}
          p="4"
          flexDirection={"row"}
        >
          <SelectContent placeholder={dates[0]} options={dates} />
         
    
        </Center>
      </Flex>
    );
  };
  