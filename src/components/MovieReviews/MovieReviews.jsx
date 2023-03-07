import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api';
import style from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieReviews = async () => {
      const result = await getMovieReviews(movieId);
      setReviews(result);
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={style.container}>
      {reviews.length ? (
        <ul className={style.list}>
          {reviews.map(review => {
            return (
              <li key={review.id} className={style.item}>
                <p className={style.author}>Author: {review.author}</p>
                <p className={style.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        'We don`t have any reviews for this movie'
      )}
    </div>
  );
};

export default MovieReviews;
