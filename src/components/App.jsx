import { lazy, Suspense } from 'react';
import {
  Routes,
  BrowserRouter,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';

const TrendingMovies = lazy(() => import('./TrendingMovies/TrendingMovies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const SearchMovies = lazy(() => import('./SearchMovies/SearchMovies'));

const StyledLink = styled(NavLink)`
  color: black;
  display: block;
  margin-right: 15px;
  font-weight: 700;
  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
          <Routes>
            <Route path="/" element={<TrendingMovies />} />
            <Route path="/movies" element={<SearchMovies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
