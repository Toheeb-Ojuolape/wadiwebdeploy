import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@chakra-ui/react";
import { DashBoardContainer } from "../Comps/DashBoardContainer";
import { getUser } from "../store/userReducer";
import { Loading } from "../Routes-Review/loading/loading";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getEvent } from "../store/eventReducer";
import { getForum } from "../store/forumReducer";
import { getProject } from "../store/projectReducer";

const SideBar = lazy(() =>
  import("../Comps/sidebar/sideBar").then((mod) => ({ default: mod.SideBar }))
);

interface MyState {
  user: {
    value: Map<any, any>;
  };
  loading: Boolean;
}

interface MyEvent {
  event: {
    value: Map<any, any>;
  };
  loading: Boolean;
}

interface MyForum {
  forum: {
    value: Map<any, any>;
  };
  loading: Boolean;
}

interface MyProjects {
  project: {
    value: Map<any, any>;
  };
  loading: Boolean;
}

const DashBoard = (props: { loggedIn: boolean }) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const userData = useSelector((state: MyState) => state.user.value);
  const eventData = useSelector((state: MyEvent) => state.event.value);
  const forumData = useSelector((state: MyForum) => state.forum.value);
  const projectData = useSelector((state: MyProjects) => state.project.value);
  const [isLoading, setIsLoading] = useState(true);
  function isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    dispatch(getUser());
    dispatch(getEvent());
    dispatch(getForum());
    dispatch(getProject());
    if (!props.loggedIn) {
      window.location.href = "/login";
    }
    console.log("🚀 ~ file: Dashboard.tsx:36 ~ useEffect ~ userData", userData);

    if (!isEmpty(userData)) {
      setIsLoading(false);
    }
  }, [dispatch, getUser]);

  return (
    <div
      className={
        !isMobile
          ? " bg-[#f8f8f8] flex h-full ml-60"
          : "bg-[#f8f8f8] flex h-full"
      }
    >
      {isLoading && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75">
          <Loading loading />
        </div>
      )}
      <Suspense fallback={<Loading loading />}>
        {!isMobile && <SideBar device="desktop" />}
      </Suspense>
      <DashBoardContainer
        userData={userData}
        eventData={eventData}
        forumData={forumData}
        projectData={projectData}
      />
    </div>
  );
};
export default DashBoard;
