import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=7e3931999c630336c410d8a20aa0361e';
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?${API_KEY}`);
  return response.data;
};
export const searchMoviesByKeyword = async query => {
  const response = await axios.get(
    `/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?${API_KEY}&language=en-US`
  );
  return response.data;
};
export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?${API_KEY}&language=en-US`
  );
  return response.data.cast;
};
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?${API_KEY}&language=en-US`
  );
  return response.data.results;
};
