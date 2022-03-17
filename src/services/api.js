import axios from 'axios';
import 'dotenv/config';

export const api = axios.create({
    baseURL: 'http://localhost:8081',
});
