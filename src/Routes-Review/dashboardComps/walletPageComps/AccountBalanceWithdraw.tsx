import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { Filter } from "iconsax-react";

export const AccountBalanceWithdraw = (props: any) => {
  return (
    <Flex className="animate__animated animate__fadeIn" direction={"column"} mb='20px'>
      <Flex align={'center'} mb='10px'>
        <Box mr='20px'>
          <Text>Account balance</Text>

          <Text fontSize={'30px'} fontWeight='extrabold'>NGN {props.balance}</Text>
        </Box>
        <Button bg='rgba(43, 95, 208, 1)' fontSize={'sm'} color={'white'}>Withdraw money</Button>
      </Flex>
      <Button size={'sm'} border={'0.5px solid rgb(193, 197, 204)'} color='rgba(71, 84, 103, 0.7)'  w={'fit-content'} leftIcon={<Filter color="rgba(71, 84, 103, 0.9)"/>}>Filter</Button>
    </Flex>
  );
};
