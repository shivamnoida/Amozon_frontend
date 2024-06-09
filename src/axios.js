import axios from "axios";

const instance = axios.create({
  baseURL: `https://amozon-backend.onrender.com/`,
});

export default instance;
