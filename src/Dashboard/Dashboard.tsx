import { lazy, Suspense, useEffect } from "react";

import { useMediaQuery } from "@chakra-ui/react";
import { DashBoardContainer } from "../Comps/DashBoardContainer";

import { Loading } from "../Routes-Review/loading/loading";

const SideBar = lazy(() =>
  import("../Comps/sidebar/sideBar").then((mod) => ({ default: mod.SideBar }))
);

const DashBoard = (props: { loggedIn: boolean }) => {
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
      <Suspense fallback={<Loading loading />}>
        {!isMobile && <SideBar device="desktop" />}
      </Suspense>
      <DashBoardContainer />
    </div>
  );
};
export default DashBoard;
