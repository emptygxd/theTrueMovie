import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Actors } from 'widgets';

import { AboutMovie, AboutPersons, MovieBackdrop } from 'entities';

import { http, Loader, MovieType } from 'shared';

import './style.scss';

const MovieById = () => {
  const { movieId } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['movie'],
    queryFn: () => {
      return http.get(`/movie/${movieId}`);
    },
    select: (data) => data.data,
    refetchOnWindowFocus: false,
  });
  const movie: MovieType = data;

  useEffect(() => {
    if (movie) {
      document.title = movie.name ?? movie.enName;
    }
  }, [movie]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <section>Error</section>;
  }

  return (
    <>
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

          <Actors persons={movie.persons} />
        </div>
      </section>
    </>
  );
};

export default MovieById;
