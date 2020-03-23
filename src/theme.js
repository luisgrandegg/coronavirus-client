import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
<<<<<<< HEAD
  palette: {
    primary: {
      main: "#20ABD6"
    }
=======
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
>>>>>>> feat: add two step form to create inquiries.
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
