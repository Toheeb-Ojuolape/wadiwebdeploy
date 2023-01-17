import { SideBar } from "../Comps/sidebar/sideBar";
import { ColorRing } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { OnBoardingContainer } from "../Comps/OnBoardContainer";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { DashBoardContainer } from "../Comps/DashBoardContainer";

export const DashBoard = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    console.log("My component has finished rendering");
  }, []);
  const [isMobile] = useMediaQuery("(min-width: 800px)");

  return (
    <div className=" bg-[#f8f8f8] flex h-full">
      {isMobile && <SideBar device="desktop" />}
      <DashBoardContainer />
    </div>
  );
};
