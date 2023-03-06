import axios from 'axios';

const KEY = '650ee73e57e26be696a7074fb8f61e89';
const URL = 'https://api.themoviedb.org/3';

const getTrendingMovies = async () => {
  const result = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);
  return result.data.results;
};

console.log(getTrendingMovies());

const getMoviesBySearchQuery = async searchQuery => {
  if (!searchQuery) {
    return [];
  }
  const result = await axios.get(
    `${URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  return result.data.results;
};

console.log(getMoviesBySearchQuery('Dune'));

const getMovieDetails = async movieId => {
  if (!movieId) {
    return null;
  }
  const result = await axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`);
  return result.data;
};

console.log(getMovieDetails('438631'));

const getMovieCredits = async movieId => {
  if (!movieId) {
    return null;
  }
  const result = await axios.get(
    `${URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
  return result.data.cast;
};

console.log(getMovieCredits('438631'));

const getMovieReviews = async movieId => {
  if (!movieId) {
    return null;
  }
  const result = await axios.get(
    `${URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return result.data.results;
};

console.log(getMovieReviews('438631'));

export {
  getTrendingMovies,
  getMovieDetails,
  getMoviesBySearchQuery,
  getMovieCredits,
  getMovieReviews,
};
