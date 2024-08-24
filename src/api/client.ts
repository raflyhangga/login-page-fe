import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:13000",
})

export default client;
