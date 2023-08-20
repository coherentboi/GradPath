import * as actionTypes from '../constants/actionTypes';

const easyappointmentsReducer = (state = [], action) => {
    switch (action.type){
        case actionTypes.EASYAPPOINTMENTS:

            return action.data;
        default:
            return state;
    }
}

export default easyappointmentsReducer;