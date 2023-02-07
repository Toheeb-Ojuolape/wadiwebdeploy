import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";



export const Credit = () => {
  return (
    <Tag
      size={"sm"}
      variant="subtle"
      bg={"rgba(209, 250, 223, 1)"}
    
      color={"#12B76A"}
      borderRadius="3xl"
    >
      <TagLabel>Credit</TagLabel>
    </Tag>
  );
};

export const Debit = () => {
  return (
    <Tag
      size={"sm"}
      variant="subtle"
      bg={"rgba(254, 228, 226, 1)"}
   
      color={"#F04438"}
      borderRadius="3xl"
    >
      <TagLabel>Debit</TagLabel>
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

export const InReview = () => {
  return (
    <Tag
      size={"sm"}
      variant="subtle"
      bg={"transparent"}
      border={"1px solid "}
      color={"#F79009"}
      borderRadius="3xl"
    >
      <TagLabel>In review</TagLabel>
    </Tag>
  );
};
