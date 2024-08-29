import { RatingMovie } from 'entities';

import { StyledButton, MovieType2, scrollToAnchor } from 'shared';

import backdrop from 'public/assets/backdrop.png';
import poster from 'public/assets/poster.png';

import './style.scss';

export const MovieBackdrop = ({ movie }: { movie: MovieType2 }) => {
  const hours = Math.floor(movie.movieLength / 60);
  const minutes = movie.movieLength % 60;

  const onAnchorClick = () => scrollToAnchor('content');

  return (
    <>
      <div className="movie__header">
        <div>
          <img
            src={movie.poster.url ?? poster}
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
              <StyledButton>Трейлер</StyledButton>
            </div>
          </div>
        </div>
      </div>

      <img
        src={movie.backdrop.url ?? backdrop}
        alt="backdrop"
        className="movie__backdrop"
      />
    </>
  );
};
