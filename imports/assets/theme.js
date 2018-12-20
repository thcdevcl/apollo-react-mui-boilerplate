import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#333333"
    },
    secondary: {
      main: "#F75C03"
    },
    custom: {
      facebookBlue: "#3b5998"
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: 50
      }
    }
  }
});
