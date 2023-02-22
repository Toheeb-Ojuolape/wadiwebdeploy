import { Box } from "@chakra-ui/react";
import { AcceptedProposalGrid } from "./acceptedProposalGrid";



export const AcceptedProposalComps = (props:any) => {
  return (
    <Box bg="white" padding="20px" borderRadius={"md"}>
      <AcceptedProposalGrid {...props} />
    
    </Box>
  );
};
