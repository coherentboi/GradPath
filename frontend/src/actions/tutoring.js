import * as api from "../api/index";
import {CALENDLYEVENTS} from "../constants/actionTypes";

export const get_calendly_events = () => async(dispatch) => {
    try{
        const { data } = await api.get_calendly_events();

        console.log(data);

        dispatch({type: CALENDLYEVENTS, data});
    }
    catch(error){
        console.log(error);
    }
}