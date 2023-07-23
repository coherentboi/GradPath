import * as api from '../api/index';
import {LOGIN} from "../constants/actionTypes";

export const login = (inputs) => async(dispatch) => {
    try{
        const { data } = await api.login(inputs);

        dispatch({ type: LOGIN, data })
    }
    catch(error){
        console.log(error);
    }
}