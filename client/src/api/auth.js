import axios from "./axios"


export const registerRequest = user => axios.post(`/register`, user);

export const loginrequest = user => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify"); // Ruta que autentica