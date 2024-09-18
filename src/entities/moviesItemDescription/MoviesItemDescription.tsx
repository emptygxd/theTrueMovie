import { MoviesType } from 'shared';

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
  console.log(movie);
  const russianName = movie.name ?? movie.alternativeName ?? '';
  const altName = movie.name ? movie.alternativeName : null;
  const altNameString = `${altName ?? ''}${altName && movie.year ? ', ' : ''}${movie.year ?? ''}`;

  const genres = movie.genres ? movie.genres[0].name : null;
  const genresString = `${genres ?? ''}${genres && movie.movieLength ? ', ' : ''}${movie.movieLength ? `${hoursString}${minutes} мин` : ''}`;

  return (
    <div className="movies__description">
      <h3 title={russianName}>{russianName}</h3>

      {altNameString && <p title={altNameString}>{altNameString}</p>}

      {genresString && <p title={genresString}>{genresString}</p>}
    </div>
  );
};
