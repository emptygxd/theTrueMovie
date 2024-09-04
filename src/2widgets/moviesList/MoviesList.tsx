import { Link } from 'react-router-dom';

import { MoviesItem, MoviesItemDescription, ZeroResults } from 'entities';

import { MoviesType, ROUTES, SmallLoader } from 'shared';

import './style.scss';

type Props = {
  movies: MoviesType[];
  pages: number;
  isFetching: boolean;
};

export const MoviesList = ({ movies, pages, isFetching }: Props) => {
  return (
    <>
      <div className="movies__container">
        {movies?.map((movie: MoviesType) => {
          return (
            <Link to={`${ROUTES.MOVIES}/${movie.id}`} key={movie.id}>
              <div className="movies__item">
                <MoviesItem movie={movie} />

                <MoviesItemDescription movie={movie} />
              </div>
            </Link>
          );
        })}
        {pages === 0 && <ZeroResults />}
      </div>
      {isFetching && <SmallLoader />}
    </>
  );
};
