import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

// import { reducers } from './rootReducer';
import { middleware, persistedReducers } from './persistor';

export const store = configureStore({
    reducer: persistedReducers,
    middleware: middleware,
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
