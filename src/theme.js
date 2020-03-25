import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  palette: {
    primary: {
      main: "#20ABD6"
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "white"
      }
    },
    MuiChip: {
      colorPrimary: {
        color: "white"
      },
      deleteIconColorPrimary: {
        color: "white"
      }
    }
  },
});
