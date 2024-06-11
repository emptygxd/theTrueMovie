import { MovieType } from '../shared/types';

const RatingContainer = ({ movie }: { movie: MovieType }) => {
  const roundedVotes = Math.round(Number(movie.imdbVotes.replace(',', '.')));
  const isGreen = Number(movie.Metascore) > 60;
  const isRed = Number(movie.Metascore) < 40;
  return (
    <>
      <div className="movie__metascore-block">
        <span
          className={
            isGreen
              ? 'movie__metascore-value-green'
              : isRed
                ? 'movie__metascore-value-red'
                : 'movie__metascore-value-yellow'
          }>
          {movie.Metascore}
        </span>
        <p className="movie__about-title">Metascore</p>
      </div>

      <div className="movie__imdb-block">
        <p className="movie__about-title">imdbRating</p>
        <p className="movie__about-value">{movie.imdbRating}/10</p>
        <p className="movie__about-value">{roundedVotes}K</p>
      </div>
    </>
  );
};

export default RatingContainer;
