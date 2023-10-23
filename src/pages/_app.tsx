// pages/_app.js
import {
    ChakraProvider,
  } from "@chakra-ui/react";
  import { AppProps } from "next/app";
  import {theme} from '@/theme/index'
  // import '../app/globals.css'
  // 1. Import the extendTheme function
  
  // 2. Extend the theme to include custom colors, fonts, etc
  
  
  function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
     
    );
  }
  
  export default MyApp;
  