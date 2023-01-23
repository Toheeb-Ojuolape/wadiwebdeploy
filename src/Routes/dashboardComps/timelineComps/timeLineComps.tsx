import { Box, Circle, useMediaQuery } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import {
  Rejected,
  Review,
  Successful,
  Uploaded,
} from "../myProjectsComps/status";

export const Timeline = (props: {
  time: string;
  title: string;
  status: string;
}) => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    
    <Box pl="10px" pr="10px">
      <div className="flex flex-row text-black">
        <time className={!isMobile ? " pr-2  mt-1 w-[109px] text-sm font-bold leading-none text-black" : " pr-2  mt-1 w-[209px] text-sm font-bold leading-none text-black"}>
          {props.time}
        </time>
        <ol className="relative border-l border-[rgba(229, 235, 244, 1)]">
          <li className="mb-10 ml-4">
            <div
              className={`absolute w-3.5 h-3.5 bg-["#2B5FD0"] rounded-full  -left-2.5 border `}
            >
              <FaCircle
                color={
                  props.status === "rejected"
                    ? "#F04438"
                    : props.status === "uploaded"
                    ? "#2B5FD0"
                    : props.status === "reviewed"
                    ? "#ED702D"
                    : props.status === "successful"
                    ? "rgba(18, 183, 106, 1)"
                    : ""
                }
              />
            </div>
            <Box
              border={"1px solid #BBE1FA"}
              bg={
                props.status === "rejected"
                  ? "#FEE4E2"
                  : props.status === "successful"
                  ? "#D1FADF"
                  : props.status === "reviewed"
                  ? "#FEF5EF"
                  : props.status === "uploaded"
                  ? "#F2F9FD"
                  : "#F4F4F4"
              }
              padding="20px"
              borderRadius={"md"}
            >
              <p className="text-[16px] font-semibold text-gray-900">
                {props.title}
              </p>
              <Box pt="10px">
                {props.status === "rejected" ? (
                  <Rejected />
                ) : props.status === "successful" ? (
                  <Successful />
                ) : props.status === "reviewed" ? (
                  <Review />
                ) : props.status === "uploaded" ? (
                  <Uploaded />
                ) : null}
              </Box>
              {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p> */}
            </Box>
          </li>
        </ol>
      </div>
    </Box>
  );
};
