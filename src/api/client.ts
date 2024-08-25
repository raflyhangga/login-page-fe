import axios from "axios";

const BASE_URL = "http://localhost:13000"; 

const client = axios.create({
    baseURL: BASE_URL
})

export const clientPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": 'application/json'
    }
})

export default client;
