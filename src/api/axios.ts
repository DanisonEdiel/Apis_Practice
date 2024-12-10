import axios from 'axios';
import { useRouter } from 'vue-router';

const baseURL = import.meta.env.VITE_REST_API_URL;

export const apiRest = axios.create({
    baseURL: baseURL
});

export const apiWebsocket = axios.create({
    baseURL: baseURL
});

