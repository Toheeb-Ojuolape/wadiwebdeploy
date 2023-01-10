import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const dark = "rgba(28, 67, 153, 1)";
const light = "rgba(28, 67, 153, 1)";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode(light, dark)(props),
      },
    }),
  },
});

export default theme;
