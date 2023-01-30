import {
  Flex,
  Text,
  Center,
  Spacer,

  Box,
  Button,
} from "@chakra-ui/react";

import { EarningLineChart } from "./earningsLineChart";


import {  SelectContent2 } from "./selectContent";

const dates = ["7 days", "2 Weeks", "1 Month", "3 Months", "1 Year"];
const query = ["Environmental", "Social", "Economic", "All"];

export const Earnings = (props: any) => {
  return (
    <Box flexDirection={"column"} w="100%">
      <TableHeading title="Projects" />
      <Flex
        justifyContent="space-evenly"
        w="fit-content"
        flexWrap={"wrap"}
     
        flexDirection={"row"}
      >
        <SelectContent2 placeholder={dates[0]} options={dates} />
        <SelectContent2 placeholder={query[0]} options={query} />

      </Flex>
      <EarningLineChart />
    </Box>
  );
};

const TableHeading = (props: any) => {

  return (
    <Flex ml='5'>
      <Center>
        <Text lineHeight={"10px"} fontSize="20px" fontWeight={"extrabold"}>
          Earnings
        </Text>
      </Center>
      <Spacer />
      <Center
        justifyContent="space-evenly"
        w="fit-content"
        flexWrap={"wrap"}
        p="4"
        flexDirection={"row"}
      >
        <Button bg='rgba(43, 95, 208, 1)' color='white' size='md' fontSize={'12px'}>Withdraw</Button>
      </Center>
    </Flex>
  );
};
