import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKENDURL });

export const submit_registration_form = (inputs) =>  API.post('/registration-form/', inputs);