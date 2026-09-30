import axios from "axios";

const instance = axios.create({
     baseURL: "http://localhost:4000/api", // la URL que siempre va consultar
     withCredentials: true // para que establezca las cookies
});

export default instance;