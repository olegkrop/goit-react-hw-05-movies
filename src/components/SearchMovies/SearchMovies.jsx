import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesBySearchQuery } from 'api';
import style from './SearchMovies.module.css';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchMovies = async () => {
      const result = await getMoviesBySearchQuery(searchQuery);
      setMovies(result);
    };
    fetchMovies();
  }, [searchQuery]);

  const handleInputSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    setSearchParams({ query: form.elements.searchMovie.value });
    form.reset();
  };

  return (
    <div className={style.container}>
      <form className={style.SearchForm} onSubmit={handleInputSubmit}>
        Search a movie
        <input
          className="SearchForm__input"
          name="searchMovie"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={searchQuery || 'Search movies'}
        />
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
      <ul className={style.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={style.item}>
              <Link
                to={`${movie.id}`}
                className={style.name}
                state={{ from: `${location.pathname}${location.search}` }}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMovies;
