import {
  HStack,
  Text,
  Box,
  Spacer,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";
import { ArrowRight2 } from "iconsax-react";
import { Link } from "react-router-dom";


export const AccountNavLink = (props: {
  icon: JSX.Element;
  title: string;
  sub: string;
  link: string;
}) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Link to={props.link}>
      <HStack padding='2px' borderRadius={'md'} mt="10px" w={!isMobile ? "400px" : "fit-content"} _hover= {{bg: "rgba(43, 95, 208, 0.2)"}}>
        <Center> {props.icon}</Center>
        <Box pl="20px">
          <Text>{props.title}</Text>
          <Text color={"rgba(71, 84, 103, 1)"} fontSize={"xx-small"}>
            {" "}
            {!isMobile && props.sub}
          </Text>
        </Box>
        <Spacer />
        <Center>
          <ArrowRight2 size={"15px"} />
        </Center>
      </HStack>
    </Link>
  );
};
