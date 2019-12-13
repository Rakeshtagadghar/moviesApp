
import axios from 'axios';

export const MOVIE_DATA = [];

const BASE_URL = 'http://localhost:3000'

export const getMovies = () => {
  return axios.get(BASE_URL + '/api/v1/movies').then((res) => res.data).catch((err) => err)
};

export const getMovieById = (id) => {
  return axios.get(BASE_URL + '/api/v1/movies/' + id).then((res) => res.data).catch((err) => err)
};

export const deleteMovieById = (id) => {
  return axios.delete(BASE_URL + '/api/v1/movies/' + id).then((res) => res.data).catch((err) => err)
};

export const CATEGORY_DATA = [
  { id: '5', name: 'all' },
  { id: '1', name: 'drama' },
  { id: '2', name: 'action' },
  { id: '3', name: 'adventure' },
  { id: '4', name: 'historical' }
]

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      //reject('cannot fetch data')
    }, 50);
  });
};

export const createMovie = movie => {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios.post(BASE_URL + '/api/v1/movies', movie).then((res) => res.data).catch((err) => err)
}

export const updateMovieById = movie => {
  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie).then((res) => res.data).catch((err) => err)
}

export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/v1/posts`).then((res) => res.data).catch((err) => err)
}

