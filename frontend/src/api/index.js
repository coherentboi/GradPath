import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKENDURL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')){
        req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

//Authentication
export const login = (inputs) => API.post('/auth/login/', inputs);
export const logout = () => API.post('/auth/logout/', null);
export const register = (inputs) => API.post('/auth/register/', inputs);
export const getuser = () => API.get('/auth/me/');
export const editprofile = (inputs) => API.put('/auth/edit-profile/', inputs);

//Registration Form
export const submit_registration_form = (inputs) =>  API.post('/registration-form/', inputs);

//Tutoring
export const get_easyappointments = () => API.get('/appointments/appointments/');