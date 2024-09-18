import { Link } from 'react-router-dom';

import { RatingMovie } from 'entities';

import {
  getUniqueProfessions,
  PersonMovies,
  ROUTES,
  translateProfession,
} from 'shared';

import './style.scss';

type Props = {
  movies: PersonMovies;
  tabClickHandler: (profession: string) => void;
  selectedTab: string;
};

export const ProfessionTabs = ({
  movies,
  tabClickHandler,
  selectedTab,
}: Props) => {
  const professions: string[] = getUniqueProfessions(movies);
  const translatedProfessions = professions.map(translateProfession);

  return (
    <div className="person__movies">
      <div className="tabs">
        {professions.map((profession, index) => (
          <button
            key={`${profession}_${index}`}
            className={`tab ${selectedTab === profession ? 'active' : ''}`}
            onClick={() => tabClickHandler(profession)}
          >
            {translatedProfessions[index]}
          </button>
        ))}
      </div>

      <div className="tab__content">
        {movies
          .filter((movie) => movie.enProfession === selectedTab)
          .map((movie, index) => (
            <Link key={`${movie}_${index}`} to={`${ROUTES.MOVIES}/${movie.id}`}>
              <div className="tab__item">
                <div className="tab__item-name">
                  <h4>{movie.name ?? movie.alternativeName}</h4>
                  {movie.name && <p>{movie.alternativeName}</p>}
                </div>

                <div className="tab__item-rating">
                  <RatingMovie rating={movie.rating ?? 0} />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
