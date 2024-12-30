import axios from "axios";
import {Logout} from "../../helpers/logout";

export const api = axios.create({
    baseURL: 'https://blog.kreosoft.space/api/'
})

export const isAxiosError = (error : unknown) => {
    return (axios.isAxiosError(error));
}

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }
)

api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            if (error.response.status == 401) {
                Logout()
            }
        }
        return Promise.reject(error);
    }
)

