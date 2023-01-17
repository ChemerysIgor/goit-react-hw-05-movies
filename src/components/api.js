import axios from 'axios';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '00196fbc08c9fb63cbb7cc63efd25ed1';

export const getTrendFilms = () => {
  const response = axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return response;
};

export const getFilmByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/keyword?api_key=${API_KEY}&query=${query}`
  );
  return response;
};

export const getFilmById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response;
};

export const getTvById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/tv/${movieId}?api_key=${API_KEY}`
  );
  return response;
};
export const getFilmCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};
export const getFilmRewiev = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response;
};
