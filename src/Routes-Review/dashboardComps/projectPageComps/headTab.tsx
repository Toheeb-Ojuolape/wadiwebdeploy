import { Box, Text } from "@chakra-ui/react";

export const HeadTab = (props: {
  onClick: any;
  text: string;
  index: number;
  name: number | string;
}) => {
  return (
    <Box mb="20px" ml="15px" mr='15px'>
      <Text fontSize={'14px'} color={props.index !== 0 ? 'rgba(71, 84, 103, 1)': "black"} onClick={props.onClick}>{props.text}</Text>

      {/* Dummy Logic */}
      {props.index === 0 && (
        <Box
          h="4px"
          borderRadius={"6px 6px 0px 0px"}
          w="100%"
          bg="rgba(43, 95, 208, 1)"
        ></Box>
      )}
    </Box>
  );
};
