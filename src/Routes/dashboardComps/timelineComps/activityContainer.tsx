import { Flex } from "@chakra-ui/react";
import { GeneralHeadingComp } from "../myProjectsComps/upcomingEvents";
import { Timeline } from "./timeLineComps";
const activity = [
  {
    title:
      "You uploaded a new project titled “Analysis of Land Use Land Cover Change in Nigeria",
    time: "10:00 AM",
    status: "uploaded",
  },
  {
    title:
      "You uploaded a new project titled “Analysis of Land Use Land Cover Change in Nigeria",
    time: "10:00 AM",
    status: "reviewed",
  },
  {
    title:
      "You rejected a new project titled “Analysis of Land Use Land Cover Change in Nigeria",
    time: "10:00 AM",
    status: "rejected",
  },
  {
    title:
      "You rejected a new project titled “Analysis of Land Use Land Cover Change in Nigeria",
    time: "10:00 AM",
    status: "rejected",
  },
];
export const ActivityContainer = (props: any) => {
  return (
    <Flex flexDirection={"column"} w="100%">
      <GeneralHeadingComp
        title="Activity"
        placeholder="Today"
        options={["Yesterday", "Today"]}
      />
      {activity.length > 0 ? (
        <div style={{ overflow: "auto", maxHeight: "600px" }}>
          {activity.map((item, index) => (
            <Timeline key={index} {...item} />
          ))}
        </div>
      ) : (
        <div>No Activitites</div>
      )}
    </Flex>
  );
};
