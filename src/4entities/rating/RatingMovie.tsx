import { MovieType } from '../../5shared/types';

const RatingMovie = ({ movie }: { movie: MovieType[] }) => {
  const theMovie = movie[0] 
  const roundedVotes = Math.round(Number(theMovie.imdbVotes.replace(',', '.')));
  const isGreen = Number(theMovie.Metascore) > 60;
  const isRed = Number(theMovie.Metascore) < 40;

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
          {theMovie.Metascore}
        </span>
        <p className="movie__about-title">Metascore</p>
      </div>

      <div className="movie__imdb-block">
        <p className="movie__about-title">imdbRating</p>
        <p className="movie__about-value">{theMovie.imdbRating}/10</p>
        <p className="movie__about-value">{roundedVotes}K</p>
      </div>
    </>
  );
};

export default RatingMovie;
