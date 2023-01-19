import { SideBar } from "../Comps/sidebar/sideBar";
import { ColorRing } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { OnBoardingContainer } from "../Comps/OnBoardContainer";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { DashBoardContainer } from "../Comps/DashBoardContainer";
import { useParams } from "react-router-dom";

export const DashBoard = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <div
      className={
        !isMobile
          ? " bg-[#f8f8f8] flex h-full ml-60"
          : "bg-[#f8f8f8] flex h-full"
      }
    >
      {!isMobile && <SideBar device="desktop" />}
      <DashBoardContainer />
    </div>
  );
};
