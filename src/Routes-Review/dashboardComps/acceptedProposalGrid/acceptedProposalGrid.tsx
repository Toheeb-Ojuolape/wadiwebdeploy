import { Box, Button, Text } from "@chakra-ui/react";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { ARP } from "./approvedRejectedPending";
export const AcceptedProposalGrid = (props: {
  projectTitle: string;
  projectType: string;
  projectField: string;
  projectDesc: string;
  doc: string;
  status: string;
  duration: string;
  datecreated: string;
  duedate: string;
}) => {
  const desc = props.projectDesc.split("\n").join("<br/>");

  return (
    <TableContainer h="fit-content">
      <Table size="sm" variant={"unstyled"}>
        <Tbody>
          <Tr h="100px">
            <Td>
              <Box h="">
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Project Title
                </Text>{" "}
                <Text size="sm">{props.projectTitle}</Text>
              </Box>
            </Td>
            <Td>
              <Box>
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Project Type
                </Text>{" "}
                <Text size="sm">{props.projectType}</Text>
              </Box>
            </Td>
            <Td>
              <Box>
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Project Type
                </Text>{" "}
                <Text size="sm">{props.projectType}</Text>
              </Box>
            </Td>
          </Tr>
          <Tr h="100px">
            <Td>
              <Box>
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Project description
                </Text>{" "}
                <Text dangerouslySetInnerHTML={{ __html: desc }} size="sm" />
              </Box>
            </Td>
            <Td>
              <Box>
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Document
                </Text>{" "}
                <Text size="sm">{props.doc}</Text>
                <Button
                  size={"sm"}
                  variant={"outline"}
                  color="rgba(43, 95, 208, 1)"
                  borderColor={"rgba(43, 95, 208, 1)"}
                  mt="10px"
                  borderRadius={"full"}
                >
                  View
                </Button>
              </Box>
            </Td>
            <Td>
              <Box>
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Approval status
                </Text>{" "}
                <ARP status={props.status} />
              </Box>
            </Td>
          </Tr>
          <Tr h="100px">
            <Td>
              <Box>
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Duration
                </Text>{" "}
                <Text size="sm">{props.duration}</Text>
              </Box>
            </Td>
            <Td>
              <Box>
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Date created
                </Text>{" "}
                <Text size="sm">{props.datecreated}</Text>
              </Box>
            </Td>
            <Td>
              <Box>
                {" "}
                <Text fontWeight={"extrabold"} mb="10px">
                  Due Date
                </Text>{" "}
                <Text size="sm">{props.duedate}</Text>
              </Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
