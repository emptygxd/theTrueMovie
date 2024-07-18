// import { useQuery } from '@tanstack/react-query';

import { Actors } from 'widgets';

import {
  AboutMovie,
  AboutPersons,
  RatingMovie,
  mockMovie2 as movie,
} from 'entities';

import { scrollToAnchor } from 'shared';
// import { http } from 'shared/api/services';

import './style.scss';

export function MovieById() {
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ['movie'],
  //   queryFn: () => {
  //     return http.get('/movie/361');
  //   },
  //   select: (data) => data.data,
  // });
  // console.log(data);
  // // const resp = [JSON.parse(localStorage.getItem('data') || '')];
  // localStorage.setItem('data', JSON.stringify(data));
  // console.log('-------------------------------------');

  // console.log(resp);

  const hours = Math.floor(movie.movieLength / 60);
  const rating = Number(movie.rating.kp.toPrecision(2));

  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>} */}

      <div key={movie.id} className="movie">
        <div className="movie__header">
          <div>
            <img
              src={movie.poster.url}
              alt="backdrop"
              className="movie__poster"
            />

            <div className="movie__info">
              <h1 className="movie__title">
                {movie.name} ({movie.year})
              </h1>

              <div className="movie__main-info">
                <p className="movie__alt-name">
                  {movie.alternativeName} {movie.ageRating}+
                </p>
                <p>{`${hours} ч. ${movie.movieLength - hours * 60} мин.`}</p>

                <RatingMovie rating={rating} />
              </div>

              <h4 className="movie__plot">{movie.shortDescription}</h4>

              <div className="movie__buttons">
                <button onClick={() => scrollToAnchor('top')}>Подробнее</button>
                <button>Трейлер</button>
              </div>
            </div>
          </div>
        </div>

        <img
          src={movie.backdrop.url}
          alt="backdrop"
          className="movie__backdrop"
        />

        <div className="movie__content">
          <div id="top" className="content__plot">
            <h2 className="section-header">Сюжет</h2>
            <h3>{movie.description}</h3>
          </div>

          <div className="content__about">
            <AboutMovie movie={movie} />
            <AboutPersons persons={movie.persons} />
          </div>

          <Actors actors={movie.persons} />
        </div>
      </div>
    </>
  );
}
