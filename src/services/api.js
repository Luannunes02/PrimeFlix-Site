import axios from 'axios';

// BASE DA API: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=d028d3f5824ace57c6bf4cd3e1fd3daa&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;