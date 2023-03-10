import React, { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { getMovieDetails } from 'api';
import style from './MovieDetails.module.css';

const IMAGE_PLACEHOLDER =
  'https://cdn.vectorstock.com/i/1000x1000/60/33/film-clip-black-silhouette-icon-vector-20326033.webp';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [backLinkHref, setBackLinkHref] = useState('/movies');
  const location = useLocation();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovie = async () => {
      const result = await getMovieDetails(movieId);
      setMovie(result);
    };
    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    if (location.state?.from) {
      return setBackLinkHref(location.state?.from);
    }
  }, [location.state?.from]);

  const releaseYear = new Date(movie.release_date).getFullYear();
  const movieGenres = (movie.genres || []).map(({ name }) => {
    return name;
  });

  const imgUrl = movie.poster_path
    ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : IMAGE_PLACEHOLDER;

  return (
    <div className={style.movieDetails__container}>
      <Link to={backLinkHref} className={style.goBack__link}>
        <IoIosArrowRoundBack />
        <span className={style.btn__text}>Go back</span>
      </Link>
      <div className={style.movieDetails__wrap}>
        <div className={style.movieDetails__poster}>
          <img src={imgUrl} alt={movie.title} className={style.movie__poster} />
        </div>
        <div className={style.movieDetails__info}>
          <h1 className={style.movie__title}>
            {movie.title} ({releaseYear})
          </h1>
          <p className={style.movieDetails__text}>
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>
          <h2 className={style.movieDetails__title}>Overview</h2>
          <p className={style.movieDetails__text}>{movie.overview}</p>
          <h2 className={style.movieDetails__title}>Genres</h2>
          <p className={style.movieDetails__text}>{movieGenres.join(', ')}</p>
        </div>
      </div>
      <div className={style.movieAdditionalInfo__container}>
        <h2 className={style.movieAdditionalInfo__title}>
          Additional information
        </h2>
        <ul className={style.movieAdditionalInfo__list}>
          <li className={style.movieAdditionalInfo__item}>
            <Link to="cast" className={style.movieAdditionalInfo__link}>
              Cast
            </Link>
          </li>
          <li className={style.movieAdditionalInfo__item}>
            <Link to="reviews" className={style.movieAdditionalInfo__link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
