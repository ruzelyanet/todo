import axios from 'axios';
import router from '@/router';

const http = axios.create({
    baseURL: process.env.VUE_APP_URL
});


/* const createSetAuthInterceptor = options => config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
}

const setAuthCb = createSetAuthInterceptor();

http.interceptors.request.use(setAuthCb);

function errorResponseHandler(error) {

    // check for errorHandle config
    if (error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false) {
        return Promise.reject(error);
    }

    // if has response show the error
    if (error.response) {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('company');
            router.replace({ name: 'login' });
        }
    }

    return Promise.reject(error);
}

http.interceptors.response.use(
    response => response,
    errorResponseHandler
); */


export default http;