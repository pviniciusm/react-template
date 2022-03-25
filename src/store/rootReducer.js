import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './modules/counter/slice';

export const reducers = combineReducers({
    counter: counterReducer,
});
