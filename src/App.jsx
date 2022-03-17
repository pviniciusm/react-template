import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { theme } from './config/theme/main';
import { store } from './store';
import { MainRouter } from './routes';

function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <MainRouter />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    );
}

export default App;
