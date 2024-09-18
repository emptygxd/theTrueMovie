import { useState } from 'react';

import { RatingMovie } from 'entities';

import {
  StyledButton,
  MovieType,
  scrollToAnchor,
  TrailerModal,
  enableScroll,
  disableScroll,
} from 'shared';

import { backdropImg, posterImg } from 'assets';

import './style.scss';

export const MovieBackdrop = ({ movie }: { movie: MovieType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prev) => {
      if (prev) {
        enableScroll();
      } else {
        disableScroll();
      }
      return !prev;
    });
  };

  const hours = Math.floor(movie.movieLength / 60);
  const minutes = movie.movieLength % 60;

  const onAnchorClick = () => scrollToAnchor('content');
  return (
    <>
      <div className="movie__header">
        <div>
          <img
            src={movie.poster.url ?? posterImg}
            alt="poster"
            className="movie__poster"
          />
          <div className="movie__info">
            {!movie.isSeries && (
              <h1 className="movie__title">
                {movie.name} {movie.year ? `(${movie.year})` : ''}
              </h1>
            )}
            {movie.isSeries && (
              <h1 className="movie__title">
                {movie.name} (
                {`${movie.releaseYears[0].start}-${movie.releaseYears[0].end}`})
              </h1>
            )}

            <div className="movie__main-info">
              {movie.alternativeName && movie.ageRating && (
                <p className="movie__alt-name">
                  {movie.alternativeName} {movie.ageRating}+
                </p>
              )}

              {!movie.isSeries && <p>{`${hours} ч. ${minutes} мин.`}</p>}

              {movie.isSeries && <p>{`${movie.seriesLength} мин.`}</p>}
              <RatingMovie rating={movie.rating.kp} />
            </div>

            <h4 className="movie__plot">{movie.shortDescription}</h4>

            <div className="movie__buttons">
              <StyledButton callback={onAnchorClick}>Подробнее</StyledButton>
              {movie.videos.trailers[0] && (
                <StyledButton callback={clickHandler}>Трейлер</StyledButton>
              )}
            </div>
          </div>
        </div>
      </div>

      <img
        src={movie.backdrop.url ?? backdropImg}
        alt="backdrop"
        className="movie__backdrop"
      />

      <TrailerModal
        url={movie.videos.trailers[0]?.url}
        isOpen={isOpen}
        closeModal={clickHandler}
      />
    </>
  );
};
