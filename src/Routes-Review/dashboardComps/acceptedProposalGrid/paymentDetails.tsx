import { Box, Text } from "@chakra-ui/react";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

export const PaymentDetails = (props: {
  paymentPlan: string;
  desc: string;
  paymentSecurity: string;
  paymentAmount: string;
}) => {
  return (
    <Box bg="white" mt='10px' padding="20px" borderRadius={"md"}>
      <Box>
        <Text>Payment details</Text>
      </Box>
      <Box color="black">
        <TableContainer
        mt='10px'
          borderRadius={"md"}
          border="1px solid rgba(152, 162, 179, 1)"
          bg="rgba(242, 249, 253, 1)"
          h="fit-content"
        >
          <Table size="sm" variant={"unstyled"}>
            <Tbody>
              <Tr h="100px">
                <Td>
                  <Box h="">
                    {" "}
                    <Text fontWeight={"extrabold"} mb="10px">
                      Payment Plan
                    </Text>{" "}
                    <Text size="sm">{props.paymentPlan}</Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    {" "}
                    <Text fontWeight={"extrabold"} mb="10px">
                      Description
                    </Text>{" "}
                    <Text size="sm">{props.desc}</Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    {" "}
                    <Text fontWeight={"extrabold"} mb="10px">
                      Payment Security
                    </Text>{" "}
                    <Text size="sm">{props.paymentSecurity}</Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    {" "}
                    <Text fontWeight={"extrabold"} mb="10px">
                      Amount
                    </Text>{" "}
                    <Text size="sm">{props.paymentAmount}</Text>
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
