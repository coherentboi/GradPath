import * as actionTypes from '../constants/actionTypes';

const userReducer = (state = {}, action) => {
    switch (action.type){
        case actionTypes.GETUSER:

            return action.data;
        default:
            return state;
    }
}

export default userReducer;