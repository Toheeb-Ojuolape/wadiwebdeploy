import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

export const Review = () => {
  return (
    <Tag size={"sm"} variant="subtle" bg={"#FEF0C7"} color={"#F79009"} borderRadius='3xl'>
      <TagLeftIcon boxSize="6px" as={FaCircle} />

      <TagLabel>Review</TagLabel>
    </Tag>
  );
};

export const Completed = () => {
  return (
    <Tag size={"sm"} variant="subtle" bg={"#D1FADF"} color={"#12B76A"} borderRadius='3xl'>
      <TagLeftIcon boxSize="6px" as={FaCircle} />
      <TagLabel>Completed</TagLabel>
    </Tag>
  );
};

export const Rejected = () => {
  return (
    <Tag size={"sm"} variant="subtle" bg={"#FEE4E2"} color={"#F04438"} borderRadius='3xl'>
      <TagLeftIcon boxSize="6px" as={FaCircle} />
      <TagLabel>Rejected</TagLabel>
    </Tag>
  );
};
