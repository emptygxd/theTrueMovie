// import { useQuery } from '@tanstack/react-query';

import { AboutMovie } from 'entities/about';
import { RatingMovie } from 'entities/rating';
import { mockMovie2 } from 'entities/movie/mock';

// import { http } from 'shared/api/services';
import { MovieType2 } from 'shared/types';

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

  const hours = Math.floor(mockMovie2[0].movieLength / 60);
  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>} */}
      {mockMovie2.map((movie: MovieType2) => (
        <div key={movie.id} className="movie">
          <div className="movie__header">
            <div className="movie__info">
              <h1 className="movie__title">
                {movie.name} ({movie.year})
              </h1>
              <div className="movie__main-info">
                <p className="movie__alt-name">
                  {movie.alternativeName} {movie.ageRating}+
                </p>
                <p>{`${hours} ч. ${movie.movieLength - hours * 60} мин.`}</p>
                <RatingMovie movies={mockMovie2} />
              </div>
              <h4 className="movie__plot">{movie.shortDescription}</h4>
            </div>

            <img
              src={movie.backdrop.url}
              alt="poster"
              className="movie__poster"
            />
          </div>

          <div className="movie__content">

            <div className="content__plot">
              <h3>{mockMovie2[0].description}</h3>
            </div>

            <h2>О фильме</h2>
            <AboutMovie movies={mockMovie2} />
          </div>
        </div>
      ))}
    </>
  );
}
