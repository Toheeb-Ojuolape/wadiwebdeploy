import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AccountOption = (props: any) => {
  return (
    <HStack spacing="2px" justify={"center"} >
      <Box w="fit-content" h="fit-content">
        <Text >{props.text}</Text>
      </Box>

      <Box w="fit-content" h="fit-content">
        <Link to={`${props.link}`}>
          <Text _hover={{color: 'black'}} color={"rgba(43, 95, 208, 1)"} fontWeight={"bold"}>
            {props.linkText}
          </Text>
        </Link>
      </Box>
    </HStack>
  );
};
