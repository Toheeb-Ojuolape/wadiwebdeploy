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
import { JsxElement } from "typescript";

export const AccountInfoComps = (props: {

  title: string;
  sub: string;
  link?: string;
}) => {
  const [isMobile, setIsMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Link to={props.link || "#"}>
      <HStack mt="10px" w={!isMobile ? "400px" : "100%"}>
        <Box pl="20px">
          <Text>{props.title}</Text>
          <Text color={"rgba(71, 84, 103, 1)"} fontSize={"xs"}>
            {" "}
            {props.sub}
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
