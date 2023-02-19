import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Comment, emptyComment } from "../../../Interface/CommentInterface";
import { GeneralHeadingComp } from "../myProjectsComps/upcomingEvents";
import { CommunityComps } from "./communityComps";
import { CommunityTextArea } from "./communityTextArea";

const comments = [
  {
    user: "John",
    title: "Where can I get some?",
    pic: "https://bit.ly/dan-abramov",
    post: "Lorem ipsum dolor sit amet consectetur. Nunc vel etiam elementum nulla donec. Lorem ipsum dolor sit amet cons.",
    date: "20 Jan 2023",
    likes: "10",
    comments: "10",
  },
  {
    user: "Tobi Moses",
    title: "Where can I get Money for free?",
    pic: "https://bit.ly/dan-abramov",
    post: "Lorem ipsum dolor sit amet consectetur. Nunc vel etiam elementum nulla donec. Lorem ipsum dolor sit amet cons.",
    date: "21 Jan 2023",
    likes: "0",
    comments: "0",
  },
  {
    title: "Where can I get Scholarship?",
    user: "John",
    pic: "https://bit.ly/dan-abramov",
    post: "Lorem ipsum dolor sit amet consectetur. Nunc vel etiam elementum nulla donec. Lorem ipsum dolor sit amet cons.",
    date: "18 Jan 2023",
    likes: "25",
    comments: "10",
  },
];

export const CommunityContainer = (props: any) => {
  const [question, setquestion] = useState<Comment>(emptyComment);

  const handleQuestions = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setquestion({ ...question, [name]: value });
  };

  const submitQuestion = () => {
    // submit question to backend
    setquestion(emptyComment);
  };
  return (
    <Flex w="100%" flexDirection={"column"} m="20px">
      <GeneralHeadingComp
        title="Forum"
        placeholder="newest"
        options={["Newest"]}
      />
      <Flex flexDirection={"column"} w="100%" overflow={"auto"} maxH="400px">
        {props.forumData&& props.forumData.slice(0,5).reverse().map((comment:any, index:Number) => {
          return <CommunityComps {...comment} />;
        })}
      </Flex>
      <CommunityTextArea
        handleQuestions={handleQuestions}
        value={question}
        submitQuestion={submitQuestion}
        userData={props.userData}
      />
    </Flex>
  );
};
