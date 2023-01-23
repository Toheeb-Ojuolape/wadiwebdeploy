import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

export const Review = () => {
  return (
    <Tag
      size={"sm"}
      variant="subtle"
      bg={"transparent"}
      border={"1px solid "}
      color={"#F79009"}
      borderRadius="3xl"
    >
      <TagLabel>Reviewed</TagLabel>
    </Tag>
  );
};

export const Successful = () => {
  return (
    <Tag
      size={"sm"}
      variant="subtle"
      bg={"transparent"}
      border={"1px solid "}
      color={"#12B76A"}
      borderRadius="3xl"
    >
      <TagLabel>Successful</TagLabel>
    </Tag>
  );
};

export const Rejected = () => {
  return (
    <Tag
      size={"sm"}
      variant="subtle"
      bg={"transparent"}
      border={"1px solid "}
      color={"#F04438"}
      borderRadius="3xl"
    >
      <TagLabel>Rejected</TagLabel>
    </Tag>
  );
};


export const Uploaded = () => {
  return (
    <Tag
      size={"sm"}
      variant="subtle"
      bg={"transparent"}
      border={"1px solid "}
      color={"#2B5FD0"}
      borderRadius="3xl"
    >
      <TagLabel>Uploaded</TagLabel>
    </Tag>
  );
};
