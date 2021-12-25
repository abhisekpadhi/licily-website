import {createTheme, ThemeOptions} from '@mui/material/styles';

export const COLORS = {
    primary: {
        main: '#5f59f7',
        light: '#e4e1ff',
    },
}

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            ...COLORS.primary
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#FFEDED',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Lora',
            fontWeight: 600,
        },
        h2: {
            fontFamily: 'Lora',
            fontWeight: 600,
        },
        h3: {
            fontFamily: 'Lora',
            fontWeight: 600,
        },
        h4: {
            fontFamily: 'Lora',
            fontWeight: 600,
        },
        h5: {
            fontFamily: 'Lora',
            fontWeight: 600,
        },
        h6: {
            fontFamily: 'Lora',
            fontWeight: 600,
        },
        subtitle1: {
            fontFamily: 'Nunito',
        },
        subtitle2: {
            fontFamily: 'Nunito',
        },
        body1: {
            fontFamily: 'Nunito',
        },
        body2: {
            fontFamily: 'Nunito',
        },
        button: {
            fontFamily: 'Nunito',
        },
        caption: {
            fontFamily: 'Nunito',
        },
        overline: {
            fontFamily: 'Nunito',
        },
        fontFamily: 'Nunito, sans-serif',
    },
};

export const theme = createTheme(themeOptions);
