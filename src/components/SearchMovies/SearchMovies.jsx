import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearchQuery } from 'api';
import style from './SearchMovies.module.css';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

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

  const handleInputSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    setSearchParams({ query: form.elements.searchMovie.value });
    form.reset();
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleInputSubmit}>
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
            <li key={movie.id} className={style.trendingMovies__item}>
              to={`${movie.id}`}
              className={style.trendingMovies__name}
              {movie.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMovies;
