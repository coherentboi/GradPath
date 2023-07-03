import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:8000" });

export const submit_registration_form = (inputs) =>  API.post('/registration-form/', inputs);