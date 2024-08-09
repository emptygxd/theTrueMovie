import { Link } from 'react-router-dom';

import { MoviesItemDescription, RatingMovie } from 'entities';

import { ROUTES, useLoadMore } from 'shared';

import { MoviesType } from './types';

import noImage from 'public/assets/noImage.jpg';

import './style.scss';

const Movies = () => {
  const { isFetching, movies } = useLoadMore();

  return (
    <section className="movies">
      {isFetching && <div>loading...</div>}
      {movies?.map((movie: MoviesType) => {
        return (
          <Link to={`${ROUTES.MOVIES}/${movie.id}`} key={movie.id}>
            <div className="movies__item">
              <div className="movies__poster">
                <img
                  src={movie.poster?.url ?? noImage}
                  loading="lazy"
                  alt="poster"
                />

                <RatingMovie
                  rating={movie.rating.kp ?? movie.rating.imdb ?? 0}
                />
              </div>

              <MoviesItemDescription movie={movie} />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
