import { Link } from 'react-router-dom';

import { MoviesType, ROUTES } from 'shared';

import noImage from 'public/assets/noImage.jpg';

import './style.scss';

type Props = {
  movie: MoviesType;
};

export const Movie = ({ movie }: Props) => {
  const russianName = movie.name ?? movie.alternativeName ?? '';

  const altName = movie.name ? movie.alternativeName : null;
  const altNameString = `${altName ?? ''}${altName && movie.year ? ', ' : ''}${movie.year ?? ''}`;

  return (
    <Link to={`${ROUTES.MOVIES}/${movie.id}`} className="main-movie__item">
      <img
        className="main-movie__poster"
        loading="lazy"
        src={movie.poster.url || noImage}
        alt="poster"
      />

      <div className="main-movie__info">
        <h3 className="main-movie__name" title={russianName}>
          {russianName}
        </h3>

        {altNameString && (
          <h4 className="main-movie__description" title={altNameString}>
            {altNameString}
          </h4>
        )}
      </div>
    </Link>
  );
};
