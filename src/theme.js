import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        borderColor: "#20ABD6",
        color: "#20ABD6",
        "&:hover": {
          borderColor: "#1d99bf",
          color: "#1d99bf"
        }
      },
      containedPrimary: {
        backgroundColor: "#20ABD6",
        color: "white",
        borderRadius: 4,
        "&:hover": {
          backgroundColor: "#1d99bf",
        }
      }
    },
    MuiTypography: {
      colorPrimary: {
        color: "#20ABD6",
      }
    },
  },
});
