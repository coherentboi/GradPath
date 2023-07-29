import { combineReducers } from 'redux';

import login from './login';
import calendly from './calendly';

export const reducers = combineReducers({
    login,
    calendly,
});