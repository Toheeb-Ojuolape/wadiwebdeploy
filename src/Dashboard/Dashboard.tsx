import { lazy, Suspense, useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import { useMediaQuery } from "@chakra-ui/react";
import { DashBoardContainer } from "../Comps/DashBoardContainer";
import { getUser } from '../store/userReducer';
import { Loading } from "../Routes-Review/loading/loading";
import {ThunkDispatch} from "@reduxjs/toolkit";

const SideBar = lazy(() =>
  import("../Comps/sidebar/sideBar").then((mod) => ({ default: mod.SideBar }))
);


interface MyState {
  user:{
    value:Map<any,any>
  },
  loading: Boolean
}



const DashBoard = (props: { loggedIn: boolean }) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const userData = useSelector((state: MyState) => state.user.value)

  useEffect(() => {
    dispatch(getUser())
    if (!props.loggedIn) {
      window.location.href = "/signin";
    }
  }, [dispatch,getUser]);

  return (
    <div
      className={
        !isMobile
          ? " bg-[#f8f8f8] flex h-full ml-60"
          : "bg-[#f8f8f8] flex h-full"
      }
    >
      <Suspense fallback={<Loading loading />}>
        {!isMobile && <SideBar device="desktop" />}
      </Suspense>
      <DashBoardContainer userData={userData}/>
    </div>
  );
};
export default DashBoard;
