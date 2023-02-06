import { Box, Flex, Spacer } from "@chakra-ui/react";
import { AcceptRejectButton } from "../dashboardComps/acceptedProposalGrid/acceptAndReject";
import { AcceptedProposalComps } from "../dashboardComps/acceptedProposalGrid/acceptedProposalComps";
import { PaymentDetails } from "../dashboardComps/acceptedProposalGrid/paymentDetails";

const AcceptedList = [
  {
    projectTitle: "Analysis of Land use and Land cover changes",
    projectType: "Analysis of Land use and Land cover changes",
    projectField: "Environmental Science",
    projectDesc:
      "Lorem ipsum dolor sit amet consectetur\n Facilisi nisi neque eget potenti erat scelerisque cras.",
    doc: "Analysis of LULLC. docx 2MB",
    status: "approved",
    duration: "7 days",
    datecreated: "09 January 2022, 9:00 AM",
    duedate: "16 January 2022, 9:00 AM",
  },
];

const paymentList = [
  {
    paymentPlan: "Express",
    paymentAmount: "NGN 70,000",
    paymentSecurity: "Secured",
    desc: "This takes shorter days to complete",
  },
];

export const AcceptedProposal = (props: any) => {
  return (
    <Flex className="animate__animated animate__slideInDown">
      <Box padding={"20px"} width={"100vw"}>
        <AcceptedProposalComps {...AcceptedList[0]} />
        <PaymentDetails {...paymentList[0]} />
        <Flex mt='20px'><Spacer/><AcceptRejectButton/></Flex>
      </Box>
    </Flex>
  );
};
