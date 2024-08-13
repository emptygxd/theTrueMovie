import { json, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Actors } from 'widgets';

import {
  AboutMovie,
  AboutPersons,
  MovieBackdrop,
  // mockMovie2 as movie,
} from 'entities';

import { http, Loader, MovieType2 } from 'shared';

import './style.scss';

const ActorsById = () => {
  const { personId } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['person'],
    queryFn: () => {
      return http.get(`/person/${personId}`);
    },
    select: (data) => data.data,
    refetchOnWindowFocus: false,
  });

  const person = data;
  localStorage.setItem('person', JSON.stringify(person));
  // const movie: MovieType2 = JSON.parse(localStorage.getItem('movie') || '');
  // console.log(movie);
  console.log(person);
  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (isError) {
  //   return <div>Error: {isError}</div>;
  // }
  return (
    <>
      {/* <section key={movie.id} className="movie"> 
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
      </section>  */}
    </>
  );
};

export default ActorsById;
