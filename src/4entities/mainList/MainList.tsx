import { Link } from 'react-router-dom';

import { Movie } from 'entities';

import { Arrows, MoviesType, ROUTES } from 'shared';

type Props = {
  movies: MoviesType[];
  container: string;
  path: string;
};

export const MainList = ({ movies, container, path }: Props) => {
  console.log(movies);
  return (
    <div className="main-movie">
      <div className="main-movie__details">
        <h2 className="section-header">Топ 250 фильмов</h2>
        <Link to={`${ROUTES.MOVIES}?type=${path}`}>Полный список</Link>
      </div>

      <div className="main-movie__wrapper">
        <div className={container}>
          {movies.map((actor: MoviesType, index) => (
            <Movie key={index} movie={actor} />
          ))}
        </div>
      </div>

      <Arrows container={`.${container}`} />
    </div>
  );
};
