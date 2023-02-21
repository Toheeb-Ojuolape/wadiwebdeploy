import { Tag } from "@chakra-ui/react";

import _ from "lodash";


export const ARP = (props: { status: string }) => {
  return (
    <Tag
      size={"md"}
      border="1px solid"
      padding={'5px'}
      bg={
        props.status === "approved"
          ? "rgba(209, 250, 223, 1)"
          : props.status === "rejected"
          ? "rgba(254, 228, 226, 1)"
          : "rgba(254, 240, 199, 1)"
      }
      color={
        props.status === "approved"
          ? "rgba(18, 183, 106, 1)"
          : props.status === "rejected"
          ? "rgba(240, 68, 56, 1)"
          : "rgba(247, 144, 9, 1)"
      }
      borderColor={
        props.status === "approved"
          ? "rgba(18, 183, 106, 1)"
          : props.status === "rejected"
          ? "rgba(240, 68, 56, 1)"
          : "rgba(247, 144, 9, 1)"
      }
    >
      {_.upperFirst(props.status)}
    </Tag>
  );
};
