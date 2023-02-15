import axios from 'axios';

// Base da URL -> https://api.themoviedb.org/3/
//URL da API ->  movie/now_playing?api_key=a6f11039f81da6060d6f40ea27d0ca15

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;