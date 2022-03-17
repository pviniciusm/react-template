import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        background: {
            default: '#eee',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    margin: 0,
                    padding: 0,
                },
                body: {
                    height: '100vh',
                    width: '100vw',
                    overflow: 'hidden',
                },
                '#root': {
                    height: '100%',
                    overflow: 'auto',
                },
            },
        },
    },
});
