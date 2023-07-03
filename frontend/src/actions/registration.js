import * as api from '../api/index.js';

export const submit_registration_form = (inputs) => async(dispatch) => {
    try{
        await api.submit_registration_form(inputs);
    }
    catch(error){
        console.log(error);
    }
}