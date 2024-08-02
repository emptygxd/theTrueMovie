// import { useQuery } from '@tanstack/react-query';

import { Actors } from 'widgets';

import {
  AboutMovie,
  AboutPersons,
  MovieBackdrop,
  mockMovie2 as movie,
} from 'entities';

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

  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>} */}

      <div key={movie.id} className="movie">
        <MovieBackdrop movie={movie} />

        <div id="content" className="movie__content">
          <div className="content__plot">
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
