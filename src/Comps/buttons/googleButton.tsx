import { Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export const GoogleButton = (props:any) => {
  // const textColor = useColorModeValue("navy.700", "white");
  // const textColorSecondary = "gray.400";
  // const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  // const textColorBrand = useColorModeValue("brand.500", "white");
  // const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );

  return (
    <Button
      fontSize="sm"
      variant="brand"
      fontWeight="500"
      w="100%"
      h="50"
      mb="24px"
      bg={googleBg}
      border="1px solid #2b5fd0"
      color={googleText}
      // _hover={googleHover}
      _active={googleActive}
      _focus={googleActive}
      isLoading={props.isLoading}
      onClick={props.onClick}
    >
      <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
      Continue with Google
    </Button>
  );
};
