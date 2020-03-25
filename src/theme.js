import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        primary: {
        main: "#20ABD6"
        }
    },
    typography: {
        fontFamily: [
        'Open Sans',
        'sans-serif',
        ].join(','),
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
    }
});
