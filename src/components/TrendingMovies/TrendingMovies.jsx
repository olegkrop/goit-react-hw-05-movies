import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'api';
import style from './TrendingMovies.module.css';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getTrendingMovies();
      setMovies(result);
    };
    fetchMovies();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Trending today</h1>
      <ul className={style.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={style.item}>
              <Link
                to={`movies/${movie.id}`}
                className={style.name}
                state={{ from: `${location.pathname}` }}
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

export default TrendingMovies;
