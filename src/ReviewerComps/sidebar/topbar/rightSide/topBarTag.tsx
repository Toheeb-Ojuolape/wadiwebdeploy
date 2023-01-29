import { Center } from "@chakra-ui/react";

export const TopBarTag = (props: { title: string }) => {
  return (
    <Center
      padding="10px"
      w="fit-content"
      borderRadius={"md"}
      color={props.title==='Researcher' ? "rgba(237, 112, 45, 1)" :"rgba(43, 95, 208, 1)"}
      bg={props.title==='Researcher'? "rgba(254, 245, 239, 1)": "rgba(242, 249, 253, 1)"}
    >
      {props.title}
    </Center>
  );
};
