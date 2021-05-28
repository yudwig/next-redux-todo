import { MuiThemeProvider, StylesProvider } from "@material-ui/core";
import theme from "../src/configs/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../src/states/store";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Story />
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  ),
];
