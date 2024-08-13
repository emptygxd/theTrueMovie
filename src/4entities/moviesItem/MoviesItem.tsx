import { MoviesType, RatingMovie } from 'entities';

import noImage from 'public/assets/noImage.jpg';

import './style.scss';

type Props = {
  movie: MoviesType;
};

export const MoviesItem = ({ movie }: Props) => {
  return (
    <div className="movies__poster">
      <img src={movie.poster?.url ?? noImage} loading="lazy" alt="poster" />

      <RatingMovie rating={movie.rating.kp ?? movie.rating.imdb ?? 0} />
    </div>
  );
};
