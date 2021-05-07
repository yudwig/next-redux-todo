import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "../configs/theme";
import initStore from "../states/store";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Provider store={initStore()}>
            <CssBaseline />
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default MyApp;
