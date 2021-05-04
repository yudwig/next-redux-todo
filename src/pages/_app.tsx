import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { StylesProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "./components/theme";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      {/* <MaterialUIThemeProvider theme={theme}> */}
      {/*  <StyledComponentsThemeProvider theme={theme}> */}
      <CssBaseline />
      <Component {...pageProps} />
      {/* </StyledComponentsThemeProvider> */}
      {/* </MaterialUIThemeProvider> */}
    </StylesProvider>
  );
};

export default MyApp;
