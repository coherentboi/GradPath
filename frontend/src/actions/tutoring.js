import * as api from "../api/index";
import {EASYAPPOINTMENTS} from "../constants/actionTypes";

export const get_easyappointments = () => async(dispatch) => {
    try{
        const { data } = await api.get_easyappointments();

        console.log(data);

        dispatch({type: EASYAPPOINTMENTS, data});
    }
    catch(error){
        console.log(error);
    }
}