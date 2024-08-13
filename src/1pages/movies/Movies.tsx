import { Link } from 'react-router-dom';

import { MoviesItem, MoviesItemDescription, MoviesType } from 'entities';

import { Loader, ROUTES, useLoadMore } from 'shared';

import './style.scss';

const Movies = () => {
  const { isFetching, movies } = useLoadMore('top250');
  localStorage.setItem('movies', JSON.stringify(movies));
  if (isFetching) {
    return <Loader />;
  }
  // const movies = JSON.parse(localStorage.getItem('movies') || '');

  console.log(movies);
  return (
    <section className="movies">
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
    </section>
  );
};

export default Movies;
