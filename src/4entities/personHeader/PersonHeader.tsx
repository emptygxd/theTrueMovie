import { Link } from 'react-router-dom';

import {
  AboutBlock,
  capitalizeFirstLetter,
  formatDate,
  formatGrowth,
  getAgeSuffix,
  getChildrenSuffix,
  PersonFull,
  ROUTES,
} from 'shared';

import noImage from 'public/assets/noImage.jpg';

import './style.scss';

type Props = {
  person: PersonFull;
  spouses: string[];
};

export const PersonHeader = ({ person, spouses }: Props) => {
  return (
    <div className="person__header">
      <img
        src={person.photo ?? noImage}
        alt="photo"
        className="person__poster"
      />

      <div className="person__info-container">
        <div className="person__name">
          <h1>{person.name}</h1>

          <h4 className="person__en-name">{person.enName}</h4>
        </div>

        <div className="person__info">
          <h2 className="section-header">О человеке</h2>

          <div className="movie__about">
            <p className="movie__about-title">Дата рождения</p>

            <p
              className={`movie__about-value person__age${!person.birthday ? ' about__no-info' : ''}`}
            >
              {person.birthday && (
                <>
                  {formatDate(new Date(person.birthday))}
                  <span className="person__age-separator"></span>
                  <span className="subtle-text">
                    {getAgeSuffix(person.age ?? 0)}
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="movie__about">
            <p className="movie__about-title">Место рождения</p>

            <p
              className={`movie__about-value-arr${!person.birthPlace[0] ? ' about__no-info' : ''}`}
            >
              {person.birthPlace.map((item, index) => {
                if (index === person.birthPlace.length - 1) {
                  return (
                    <Link to={`/movies`} key={index}>
                      {item.value}
                    </Link>
                  );
                }
                return `${item.value}, `;
              })}
            </p>
          </div>

          {person.spouses[0] && (
            <div className="movie__about">
              <p className="movie__about-title">
                {capitalizeFirstLetter(person.spouses[0].relation)}
              </p>
              <div className="person__spouses-container">
                {person.spouses.map((spouse, index) => (
                  <p
                    key={index}
                    className="movie__about-value-arr person__spouses"
                  >
                    {spouses[index] !== '' && (
                      <Link to={`${ROUTES.PERSONS}/${spouse.id}`}>
                        {spouses[index]}
                      </Link>
                    )}
                    {spouses[index] === '' && <p>?</p>}
                    {spouse.divorced ? `(${spouse.divorcedReason})` : ''}
                    <span className="subtle-text">
                      {getChildrenSuffix(spouse.children)}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          )}

          <AboutBlock title="Рост" value={formatGrowth(person.growth)} />
          <AboutBlock title="Всего фильмов" value={person.movies.length} />
        </div>
      </div>
    </div>
  );
};
