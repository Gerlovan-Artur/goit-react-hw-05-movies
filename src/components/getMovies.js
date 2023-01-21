import axios from 'axios';

const API_KEY = 'd94f1660bc08f9c6e6ef31fbeee3057f';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_URL = 'trending/movie/day';
const BY_SEARCH_URL = 'search/movie';

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}${TRENDING_URL}?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieBySearch(query) {
  const response = await axios.get(
    `${BASE_URL}${BY_SEARCH_URL}?api_key=${API_KEY}&query=${query}`
  );
  return response;
}

export async function getMovieDetails(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieActors(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response;
}