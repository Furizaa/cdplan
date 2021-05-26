import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, DarkMode, extendTheme } from "@chakra-ui/react";
import theme from "../theme";

const extendedTheme = extendTheme(theme);

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={extendedTheme}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ktd5kgo.css" />
      </Head>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  );
}

export default App;
