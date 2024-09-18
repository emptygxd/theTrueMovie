import { Link } from 'react-router-dom';

import { Movie } from 'entities';

import { Arrows, MoviesType, ROUTES } from 'shared';

import './style.scss';

type Props = {
  movies: MoviesType[];
  container: string;
  path: string;
};

export const MainList = ({ movies, container, path }: Props) => {
  return (
    <div className="main-movie">
      <div className="main-movie__details">
        <h2 className="section-header">{`Топ 250 ${path === 'Сериалы' ? 'сериалов' : 'фильмов'}`}</h2>
        <Link to={`${ROUTES.MOVIES}?type=${path}`}>Полный список</Link>
      </div>

      <div className="main-movie__wrapper">
        <div className={container}>
          {movies.map((actor: MoviesType, index) => (
            <Movie key={`${actor}_${index}`} movie={actor} />
          ))}
        </div>
      </div>

      <Arrows container={`.${container}`} />
    </div>
  );
};
