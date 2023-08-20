import * as api from '../api/index';
import {GETUSER, LOGIN, LOGOUT} from "../constants/actionTypes";

export const login = (inputs) => async(dispatch) => {
    try{
        const { data } = await api.login(inputs);

        dispatch({ type: LOGIN, data })

        return "success";
    }
    catch(error){
        console.log(error);

        return error.response.data.non_field_errors;
    }
}

export const logout = () => async(dispatch) => {
    try{
        await api.logout();

        dispatch({type: LOGOUT});
    }
    catch(error){
        console.log(error);
    }
}

export const register = (inputs) => async(dispatch) => {
    try{
        await api.register(inputs);

        return dispatch(login(inputs));
    }
    catch(error){
        console.log(error);

        return error.response.data;
    }
}

export const getuser = () => async(dispatch) => {
    try{
        const { data } = await api.getuser();

        console.log(data);

        dispatch({type: GETUSER, data})
    }
    catch(error){
        console.log(error);
    }
}

export const editprofile = (inputs) => async(dispatch) => {
    try{
        await api.editprofile(inputs);

        getuser();

        return "Success!";
    }
    catch(error){
        console.log(error);

        return error.response.data.error;
    }
}