import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from './config/theme/main';
import { store, persistor } from './store';
import { MainRouter } from './routes';

function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <MainRouter />
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </React.Fragment>
    );
}

export default App;
