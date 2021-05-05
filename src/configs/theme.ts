import { createMuiTheme, Theme } from "@material-ui/core/styles";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#99d066",
      main: "#689f38",
      dark: "#387002",
      contrastText: "#000000",
    },
  },
});

export default theme;
