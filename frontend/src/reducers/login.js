import * as actionTypes from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) => {
    switch (action.type){
        case actionTypes.LOGIN:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));

            return {...state, authData: action.data, loading: false, errors: null};
        default:
            return state;
    }
}

export default authReducer;