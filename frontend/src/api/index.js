import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKENDURL });

API.interceptors.request.use((req) => {
   if(localStorage.getItem('profile')){
       req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('profile')).token}`;
   }
});

//Authentication
export const login = (inputs) => API.post('/auth/login/', inputs)


//Registration Form
export const submit_registration_form = (inputs) =>  API.post('/registration-form/', inputs);