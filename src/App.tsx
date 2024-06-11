import { http } from './shared/api/services';
import { useQuery } from './shared/hooks/useQuery';
import { MovieType } from './shared/types';
import './movie.css';

function App() {
  // const {
  //   isLoading,
  //   isError,
  //   data: products,
  // } = useQuery<MovieType>(`http://www.omdbapi.com/?apikey=4287dec6&i=`, {
  //   id: 'tt3896198',
  // });
  // const getData = async (id: string) => {
  //   const result = await http.get(``);
  //   return result.data;
  // http.get('http://www.omdbapi.com/?apikey=4287dec6&i=tt3896198')
  //http://www.omdbapi.com/?apikey=4287dec6&i=${id}
  // };
  const data = [JSON.parse(localStorage.getItem('data') || '')];
  console.log(data);
  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>} */}
      {data.map((movie: MovieType) => (
        <div key={movie.imdbID} className="movie__container">
          <img src={movie.Poster} alt="" className="movie__poster" />
          <div className="movie__info">
            <h1 className="movie__title">
              {movie.Title} ({movie.Year})
            </h1>
            <h3 className="movie__plot">{movie.Plot}</h3>
            <h2 className="movie__about">About</h2>

            <div className="movie__about-block">
              <p className="movie__about-title">Released</p>
              <p className="movie__about-value">{movie.Released}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Country</p>
              <p className="movie__about-value">{movie.Country}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Genre</p>
              <p className="movie__about-value">{movie.Genre}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Language</p>
              <p className="movie__about-value">{movie.Language}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Type</p>
              <p className="movie__about-value">{movie.Type}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Runtime</p>
              <p className="movie__about-value">{movie.Runtime}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">BoxOffice</p>
              <p className="movie__about-value">{movie.BoxOffice}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Actors</p>
              <p className="movie__about-value">{movie.Actors}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Director</p>
              <p className="movie__about-value">{movie.Director}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Writer</p>
              <p className="movie__about-value">{movie.Writer}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Production</p>
              <p className="movie__about-value">{movie.Production}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">Awards</p>
              <p className="movie__about-value">{movie.Awards}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">DVD</p>
              <p className="movie__about-value">{movie.DVD}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">imdbID</p>
              <p className="movie__about-value">{movie.imdbID}</p>
            </div>

            {movie.Website !== 'N/A' && (
              <div className="movie__about-block">
                <p className="movie__about-title">Website</p>
                <p className="movie__about-value">{movie.Website}</p>
              </div>
            )}

            <div className="movie__about-block">
              <p className="movie__about-title">Rated</p>
              <p className="movie__about-value">{movie.Rated}</p>
            </div>
          </div>

          <div className="movie__rating">
            <div className="movie__about-block">
              <p className="movie__about-title">Metascore</p>
              <p className="movie__about-value">{movie.Metascore}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">imdbRating</p>
              <p className="movie__about-value">{movie.imdbRating}</p>
            </div>

            <div className="movie__about-block">
              <p className="movie__about-title">imdbVotes</p>
              <p className="movie__about-value">{movie.imdbVotes}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
