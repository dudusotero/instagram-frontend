import axios from "axios";

const api = axios.create({
  baseURL: "https://instagram-backend.herokuapp.com"
});

export default api;
