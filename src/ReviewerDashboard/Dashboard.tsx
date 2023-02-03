
import { useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";

import { ReviewerDashBoardContainer } from "../ReviewerComps/ReviewerDashboardContainer";
import { SideBar } from "../ReviewerComps/sidebar/reviewSideBar";

 const ReviewerDashBoard = (props: { loggedIn: boolean }) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    if (!props.loggedIn) {
      window.location.href = "/signin";
    }
  }, []);

  return (
    <div
      className={
        !isMobile
          ? " bg-[#f8f8f8] flex h-full ml-60"
          : "bg-[#f8f8f8] flex h-full"
      }
    >
      {!isMobile && <SideBar device="desktop" />}
      <ReviewerDashBoardContainer />
    </div>
  );
};

export default ReviewerDashBoard;