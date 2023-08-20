import { combineReducers } from 'redux';

import login from './login';
import easyappointments from './easyappointments';
import user from "./user";

export const reducers = combineReducers({
    login,
    easyappointments,
    user,
});