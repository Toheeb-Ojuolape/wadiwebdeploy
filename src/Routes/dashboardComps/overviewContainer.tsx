import { Box} from "@chakra-ui/react";
import { OverviewComps } from "./overviewComps/overviewComps";

export const OverViewContainer = (props: any) => {
  return (
    <Box>
   
      <OverviewComps userData={props.userData} projectData={props.projectData} />
    </Box>
  );
};
