import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/open-sans";
import '@fontsource/titillium-web/700.css';

const colors = {
  background: {
    100: "#191919",
    200: "#FAFBFC",
  },
  white: {
    100: "#FFF",
  },
};

const fonts = {
  openSans: "Open Sans, sans-serif",
  titil: 'Titillium Web, sans-serif',
};

const styles = {
  global: (props: any) => ({
    "html, body": {
      color: mode("#191919","#fff")(props),
      bg: mode( "#fff","#191919")(props),
      fontFamily:'Open Sans, sans-serif'
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "dark", // 'dark' | 'light'
  useSystemColorMode: true,
};

export const theme = extendTheme({ colors, fonts,config, styles });
