import { useMediaQuery } from "@chakra-ui/react";
import { TopBar } from "./sidebar/topbar/topbar";

export const DashBoardContainer = () => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  return (
    <div className={"h-screen w-screen"}>
      <TopBar />
    </div>
  );
};
