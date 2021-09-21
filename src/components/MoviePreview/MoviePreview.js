import React from 'react';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ movie }) => {
  return (
    <div>
      <img className={styles.MovieListImg} src="" alt={movie.original_title} />
      <p className={styles.MovieListTitle}>{movie.title}</p>
    </div>
  );
};
export default MoviePreview;
