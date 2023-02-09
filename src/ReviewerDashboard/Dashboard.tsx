
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

import { ReviewerDashBoardContainer } from "../ReviewerComps/ReviewerDashboardContainer";
import { SideBar } from "../ReviewerComps/sidebar/reviewSideBar";
import { Loading } from "../Routes-Review/loading/loading";

 const ReviewerDashBoard = (props: { loggedIn: boolean }) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!props.loggedIn) {
      window.location.href = "/signin";
    }
    // set a timeout to simulate a loading state
   
    setIsLoading(false)
  }, [props.loggedIn]);


  return (
    <div
      className={
        !isMobile
          ? " bg-[#f8f8f8] flex h-full ml-60"
          : "bg-[#f8f8f8] flex h-full"
      }

    >
         {isLoading && <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75">
        <Loading loading />
      </div>}
      {!isMobile && <SideBar device="desktop" />}
      <ReviewerDashBoardContainer />
    </div>
  );
};

export default ReviewerDashBoard;