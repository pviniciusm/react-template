import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from './rootReducer';

export const persistedReducers = persistReducer(
    {
        key: 'react_template',
        storage,
    },
    reducers
);

// Necessario usar este middleware no configureStore para usar o persistor no toolkit
// Caso contrario, o persistor gera erros (para maiores detalhes, leia a documentacao).
export const middleware = (defaultMiddleware) =>
    defaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    });
