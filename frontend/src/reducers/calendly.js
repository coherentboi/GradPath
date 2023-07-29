import * as actionTypes from '../constants/actionTypes';

const calendlyReducer = (state = [], action) => {
    switch (action.type){
        case actionTypes.CALENDLYEVENTS:

            return action.data;
        default:
            return state;
    }
}

export default calendlyReducer