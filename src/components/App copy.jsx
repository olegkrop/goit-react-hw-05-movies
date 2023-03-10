import { lazy } from 'react';

const TrendingMovies = lazy(() => import('./TrendingMovies/TrendingMovies'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const SearchMovies = lazy(() => import('./SearchMovies/SearchMovies'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <TrendingMovies />
      <MovieReviews />
      <MovieCast />
      <SearchMovies />
    </div>
  );
};
