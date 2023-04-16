
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

import { ReviewerDashBoardContainer } from "../ReviewerComps/ReviewerDashboardContainer";
import { SideBar } from "../ReviewerComps/sidebar/reviewSideBar";
import { Loading } from "../Routes-Review/loading/loading";
import { useDispatch,useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getReviewerProject } from "../store/projectByReviewer";


interface MyProjects {
  reviewerProjects: {
    value: Map<any, any>;
  };
  loading: Boolean;
}

 const ReviewerDashBoard = (props: { loggedIn: boolean }) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
   const [isLoading, setIsLoading] = useState(true);
   const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
   const projectData = useSelector((state: MyProjects) => state.reviewerProjects.value);

  useEffect(() => {
    if (!props.loggedIn) {
      window.location.href = "/login";
    }
    // set a timeout to simulate a loading state
    setIsLoading(false)
  }, [props.loggedIn]);

  useEffect(()=>{
    dispatch(getReviewerProject())
  },[dispatch])


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
      <ReviewerDashBoardContainer projectData={projectData}/>
    </div>
  );
};

export default ReviewerDashBoard;