import { Box, Button, Flex, Spacer,} from "@chakra-ui/react";

import { AccountInfoComps } from "../accountInfoComps";

import { GoBackto } from "../goBackto";


export const AccountInfo = (props: any) => {
  const AccountInfoList = [
    {
      title: "First name",
      sub: props.userData.firstName,
    },
    {
      title: "Last name",
      sub: props.userData.lastName,
    },
    {
      title: "Email",
      sub: props.userData.email,
    },
    {
      title: "Country",
      sub: props.userData.country,
    },
    {
      title: "User type",
      sub: "Researcher",
    },
    {
      title: "Gender",
      sub: props.userData.gender,
    }
  ];
  
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
