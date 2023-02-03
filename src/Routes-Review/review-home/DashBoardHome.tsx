import { Box, Flex } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import { Loading } from "../loading/loading";

const OverViewContainer = lazy(() =>
  import("../dashboardComps/overviewContainer").then((mod) => ({
    default: mod.OverViewContainer,
  }))
);
const ProjectsAndEarnings = lazy(() =>
  import("../dashboardComps/projectsAndEarnings").then((mod) => ({
    default: mod.ProjectsAndEarnings,
  }))
);
const RequestAndDeadline = lazy(() =>
  import("../dashboardComps/requestAndDeadline").then((mod) => ({
    default: mod.RequestAndDeadline,
  }))
);
export const ReviewHome = (props: any) => {
  return (
    <Flex>
      <Box padding={"20px"} width={"100vw"}>
        <Suspense fallback={<Loading loading />}>
          <OverViewContainer />
          <ProjectsAndEarnings />
          <RequestAndDeadline />
        </Suspense>
      </Box>
    </Flex>
  );
};
