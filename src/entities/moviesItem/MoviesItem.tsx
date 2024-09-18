import { RatingMovie } from 'entities';

import { MoviesType } from 'shared';

import { noImageImg } from 'assets';

import './style.scss';

type Props = {
  movie: MoviesType;
};

export const MoviesItem = ({ movie }: Props) => {
  return (
    <div className="movies__poster">
      <img src={movie.poster?.url ?? noImageImg} loading="lazy" alt="poster" />

      <RatingMovie rating={movie.rating.kp ?? movie.rating.imdb ?? 0} />
    </div>
  );
};
