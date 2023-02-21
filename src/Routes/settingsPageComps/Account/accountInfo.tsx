import { Box, Button, Flex, Spacer,} from "@chakra-ui/react";

import { AccountInfoComps } from "../accountInfoComps";

import { GoBackto } from "../goBackto";

const AccountInfoList = [
  {
    title: "First name",
    sub: "Toheeb",
  },
  {
    title: "Last name",
    sub: "Ojoulape",
  },
  {
    title: "Email",
    sub: "toheebojoulape@gmail.com",
  },
  {
    title: "Phone number",
    sub: "08123456789",
  },
  {
    title: "Country",
    sub: "Nigeria",
  },
  {
    title: "User type",
    sub: "Reviewer",
  },
  {
    title: "Gender",
    sub: "Male",
  },
  {
    title: "Account creation",
    sub: "Jan 23, 2023, 09:50:10 AM",
  },
];

export const AccountInfo = (props: any) => {
  return (
    <Flex className="animate__animated animate__fadeIn">
      
      <Box w='100%'>
      <Flex>
        <GoBackto name='Account Information'/>
          <Spacer/>

          <Button fontSize='sm' bg="rgba(43, 95, 208, 1)" color={"white"}>
            Edit Profile
          </Button>
        </Flex>
        <Box mt="20px">
          {AccountInfoList.map((item, index) => {
            return (
              <AccountInfoComps key={index} title={item.title} sub={item.sub} />
            );
          })}
        </Box>
      </Box>
    </Flex>
  );
};
