import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Actors } from 'widgets';

import {
  AboutMovie,
  AboutPersons,
  MovieBackdrop,
  // mockMovie2 as movie,
} from 'entities';

import { http } from 'shared';

import './style.scss';

const MovieById = () => {
  const { movieId } = useParams();

  const { isLoading, isError, data: movie } = useQuery({
    queryKey: ['movie'],
    queryFn: () => {
      return http.get(`/movie/${movieId}`);
    },
    select: (data) => data.data,
  });

  // const movie = JSON.parse(localStorage.getItem('data') || '');

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>}

      <section key={movie.id} className="movie">
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
      </section>
    </>
  );
};

export default MovieById;
