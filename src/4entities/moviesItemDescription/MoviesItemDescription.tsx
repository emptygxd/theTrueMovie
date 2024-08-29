import { MoviesType } from 'entities';

import './style.scss';

type Props = {
  movie: MoviesType;
};

export const MoviesItemDescription = ({ movie }: Props) => {
  let hours;
  let minutes;
  let hoursString;

  if (movie.movieLength) {
    hours = Math.floor(movie.movieLength / 60);
    minutes = movie.movieLength % 60;

    hoursString = hours !== 0 ? `${hours} ч ` : '';
  }

  const russianName = movie.name ?? movie.alternativeName ?? '';
  const altName = movie.alternativeName ? `${movie.alternativeName}, ` : '';

  return (
    <div className="movies__description">
      <h3 title={russianName}>{russianName}</h3>

      <p title={`${movie.name ? `${altName}, ` : ''}${movie.year}`}>
        {movie.name ? `${altName}` : ''}
        {movie.year}
      </p>

      {movie.genres[0] && (
        <p
          title={`${movie.genres[0].name}${movie.movieLength ? `, ${hoursString}${minutes} мин` : ''}`}
        >
          {movie.genres[0].name}
          {movie.movieLength ? `, ${hoursString}${minutes} мин` : ''}
        </p>
      )}
    </div>
  );
};
