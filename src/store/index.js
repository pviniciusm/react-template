import { createStore } from 'redux';
import { reducers } from './rootReducer';

export const store = createStore(reducers);
