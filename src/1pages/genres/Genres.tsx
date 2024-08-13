import { Link } from 'react-router-dom';

import { MoviesItem, MoviesItemDescription, MoviesType } from 'entities';

import { Loader, ROUTES, useLoadMore } from 'shared';

import './style.scss';

const Genres = () => {
  const { isFetching, movies: genres } = useLoadMore('series-top250');
  localStorage.setItem('genres', JSON.stringify(genres));
  if (isFetching) {
    return <Loader />;
  }
  // const movies = JSON.parse(localStorage.getItem('movies') || '');

  console.log(genres);
  return (
    <section className="movies">
      {genres?.map((genre: MoviesType) => {
        return (
          <Link to={`${ROUTES.MOVIES}/${genre.id}`} key={genre.id}>
            <div className="movies__item">
              <MoviesItem movie={genre} />

              <MoviesItemDescription movie={genre} />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Genres;
