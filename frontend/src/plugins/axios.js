import axios from "axios";

axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://127.0.0.1:8000"

axios.get('/sanctum/csrf-cookie');

export default axios;