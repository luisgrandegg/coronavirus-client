import { createMuiTheme } from "@material-ui/core/styles";
import variables from './styles/variables/_colors.scss';

export default createMuiTheme({
    palette: {
        primary: {
            main: variables.primary
        },
        secondary: {
            main: variables.secondary
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
    },
});
