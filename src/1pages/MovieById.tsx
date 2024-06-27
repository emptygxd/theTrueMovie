// import { useQuery } from '@tanstack/react-query';

// import { http } from '../shared/api/services';

import { MovieType } from '../5shared/types';
import { mockMovie } from '../4entities/movie/mock';

import '../0app/movie.css';
import { AboutMovie } from '../4entities/about';
import RatingMovie from '../4entities/rating/RatingMovie';

function MovieById() {
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => {
  //     return http.get('?i=tt3896198');
  //   },
  //   select: data => data.data,
  // });
  // localStorage.setItem('data', JSON.stringify(data));
  // const data = [JSON.parse(localStorage.getItem('data') || '')];

  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>} */}
      {mockMovie.map((movie: MovieType) => (
        <div key={movie.imdbID} className="movie__container">
          <img src={movie.Poster} alt="" className="movie__poster" />
          <div className="movie__info">
            <h1 className="movie__title">
              {movie.Title} ({movie.Year})
            </h1>
            <h3 className="movie__plot">{movie.Plot}</h3>
            <h2 className="movie__about">About</h2>

            <AboutMovie movie={mockMovie}/>
          </div>

          {/* <div className="movie__rating">
            
          </div> */}

          <RatingMovie movie={mockMovie}/>
        </div>
      ))}
    </>
  );
}

export default MovieById;
