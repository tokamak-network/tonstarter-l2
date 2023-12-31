import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/open-sans";
import "@fontsource/titillium-web/700.css";

const colors = {
  background: {
    100: "#191919",
    200: "#FAFBFC",
  },
  white: {
    100: "#FFF",
  },
  blue: {
    200:'#0070ED'
  }
};

const fonts = {
  openSans: "Open Sans, sans-serif",
  titil: "Titillium Web, sans-serif",
};

const styles = {
  global: (props: any) => ({
    "html, body": {
      color: mode("#191919", "#fff")(props),
      bg: mode("#fff", "#191919")(props),
      fontFamily: "Open Sans, sans-serif",
    },
    button: {
      bg: "transparent",
      border: "none",
      boxShadow: "none !important",
      _hover: {
        bg: "transparent",
        border: "none",
        boxShadow: "none !important",
      },
    },
    border: {
      _hover: {
        borderColor: "transparent",
      },
    },
    select: {
      paddingLeft: "7px !important",
      paddingRight: "0px !important",
      width: "72px !important",
    },
    ".css-1i469j7": {
      backgroundColor: "#0070ED !important",
      padding: "0px !important",
    },
    ".css-1ski005": {
      border: "1px solid #535353 !important",
      borderRadius: "4px !important",
    },
    ".css-1ski005[data-checked]": {
      bg: "#0070ED !important",
    },

    ".css-1itxvgn": {
      height: "18px !important",
      width: "18px !important",
      border: "1px solid #535353 !important",
    },
    ".css-1itxvgn[aria-checked=true], .css-1itxvgn[data-checked]": {
      background: "#0070ED !important",
      borderColor:  "#0070ED !important",
      color: '#fff !important'
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "dark", // 'dark' | 'light'
  useSystemColorMode: true,
};

export const theme = extendTheme({ colors, fonts, config, styles });
