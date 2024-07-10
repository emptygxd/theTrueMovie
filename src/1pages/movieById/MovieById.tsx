import { useQuery } from '@tanstack/react-query';

import { http } from '@shared/api/services';

import { AboutMovie } from '@entities/about';
import { RatingMovie } from '@entities/rating';

import { mockMovie, mockMovie2 } from '@entities/movie/mock';
import { MovieType, MovieType2 } from '@shared/types';

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
      <div className="movie">
        {/* {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>} */}
        {mockMovie2.map((movie: MovieType2) => (
          <div key={movie.id} className="movie__container">
            <img
              src={movie.poster.url}
              alt="poster"
              className="movie__poster"
            />
            <div className="movie__info">
              <h1 className="movie__title">
                {movie.name} ({movie.year})
              </h1>
              <p className="movie__alt-name">
                {movie.alternativeName} {movie.ageRating}+
              </p>
              <h3 className="movie__plot">{movie.shortDescription}</h3>
              <h2>О фильме</h2>

              <AboutMovie movies={mockMovie2} />
            </div>

            <RatingMovie movies={mockMovie2} />
          </div>
        ))}
      </div>
    </>
  );
}
