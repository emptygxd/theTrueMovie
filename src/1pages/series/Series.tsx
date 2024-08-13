import { Link } from 'react-router-dom';

import { MoviesItem, MoviesItemDescription, MoviesType } from 'entities';

import { Loader, ROUTES, useLoadMore } from 'shared';

import './style.scss';

const Series = () => {
  const { isFetching, movies: series } = useLoadMore('series-top250');
  localStorage.setItem('series', JSON.stringify(series));
  if (isFetching) {
    return <Loader />;
  }
  // const movies = JSON.parse(localStorage.getItem('movies') || '');

  console.log(series);
  return (
    <section className="movies">
      {series?.map((serial: MoviesType) => {
        return (
          <Link to={`${ROUTES.MOVIES}/${serial.id}`} key={serial.id}>
            <div className="movies__item">
              <MoviesItem movie={serial} />

              <MoviesItemDescription movie={serial} />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Series;
