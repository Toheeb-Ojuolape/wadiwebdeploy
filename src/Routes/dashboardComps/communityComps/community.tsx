import { Flex } from "@chakra-ui/react";
import { GeneralHeadingComp } from "../myProjectsComps/upcomingEvents";
import { CommunityComps } from "./communityComps";

const comments = [
  {
    user: "John",
    pic: "https://bit.ly/dan-abramov",
    post: "Lorem ipsum dolor sit amet consectetur. Nunc vel etiam elementum nulla donec. Lorem ipsum dolor sit amet cons.",
    date: "20 Jan 2023",
    likes: "10",
    comments: "10",
  },
  {
    user: "Tobi Moses",
    pic: "https://bit.ly/dan-abramov",
    post: "Lorem ipsum dolor sit amet consectetur. Nunc vel etiam elementum nulla donec. Lorem ipsum dolor sit amet cons.",
    date: "21 Jan 2023",
    likes: "0",
    comments: "0",
  },
  {
    user: "John",
    pic: "https://bit.ly/dan-abramov",
    post: "Lorem ipsum dolor sit amet consectetur. Nunc vel etiam elementum nulla donec. Lorem ipsum dolor sit amet cons.",
    date: "18 Jan 2023",
    likes: "25",
    comments: "10",
  },
];

export const CommunityContainer = (props: any) => {
  return (
    <Flex w="100%" flexDirection={"column"} m='20px'>
      <GeneralHeadingComp
        title="Community"
        placeholder="newest"
        options={["Newest"]}
      />
      {comments.map((comment, index) => {
        return <CommunityComps {...comment}/>;
      })}
    </Flex>
  );
};
