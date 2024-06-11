import { useQuery } from '../shared/hooks/useQuery';
import { MovieType } from '../shared/types';
import '../movie.css';
import AboutContainer from '../containers/AboutContainer';
import RatingContainer from '../containers/RatingContainer';

const MovieById = () => {
  const {
    isLoading,
    isError,
    data,
  } = useQuery<MovieType>(`http://www.omdbapi.com/?apikey=4287dec6&i=`);
  
  // const data = [JSON.parse(localStorage.getItem('data') || '')];
  // console.log(data);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>}
      {data && (
        <div key={data.imdbID} className="movie__container">
          <img src={data.Poster} alt="" className="movie__poster" />

          <div className="movie__info">
            <h1 className="movie__title">
              {data.Title} ({data.Year})
            </h1>

            <h3 className="movie__plot">{data.Plot}</h3>
            <h2 className="movie__about">About</h2>

            <AboutContainer movie={data} />
          </div>

          <div className="movie__rating">
            <RatingContainer movie={data}/>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieById;
