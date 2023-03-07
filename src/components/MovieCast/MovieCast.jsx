import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api';
import style from './MovieCast.module.css';

const IMAGE_PLACEHOLDER = '';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieCast = async () => {
      const result = await getMovieCredits(movieId);
      setCast(result);
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {cast.map(actor => {
          const imgUrl = actor.profile_path
            ? `http://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : IMAGE_PLACEHOLDER;
          return (
            <li key={actor.id} className={style.item}>
              <img
                src={imgUrl}
                alt={actor.name}
                className={style.actor__image}
              />
              <p className={style.actor__text}>{actor.name}</p>
              <p className={style.character__text}>
                Character: {actor.character}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
