import { Center } from "@chakra-ui/react";

export const TopBarTag = (props: {
  title: string;
  bg: string;
  color: string;
}) => {
  return (
    <Center
      background={props.bg}
      padding="10px"
      w="fit-content"
      borderRadius={'md'}
      color={props.color}
    >
      {props.title}
    </Center>
  );
};
