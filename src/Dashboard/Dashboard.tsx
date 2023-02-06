import { lazy, Suspense, useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  function isEmpty(obj:any) {
    return Object.keys(obj).length === 0;
}

  useEffect(() => {
    dispatch(getUser())
    if (!props.loggedIn) {
      window.location.href = "/signin";
    }
    console.log("🚀 ~ file: Dashboard.tsx:36 ~ useEffect ~ userData", userData)
 

    if (!isEmpty(userData)) {
    
      setIsLoading(false);
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
            {isLoading && <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75">
        <Loading loading /></div>}
      <Suspense fallback={<Loading loading />}>
        {!isMobile && <SideBar device="desktop" />}
      </Suspense>
      <DashBoardContainer userData={userData}/>
    </div>
  );
};
export default DashBoard;
