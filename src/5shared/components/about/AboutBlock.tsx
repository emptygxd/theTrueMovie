import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import { Country, Genre, Person, ROUTES } from 'shared';

import './style.scss';

type Props = {
  title: string;
  value?: string | number;
  currency?: string;
  valueArr?: Country[] | Person[] | Genre[] | string;
  path?: string;
  style?: CSSProperties;
  className?: string;
};

export const AboutBlock = ({
  title,
  value,
  valueArr,
  path,
  style,
  className,
}: Props) => {
  if (!Array.isArray(valueArr) && valueArr !== undefined) {
    return (
      <div className="movie__about">
        <p className="movie__about-title">{title}</p>
        <div
          className={`movie__about-value-arr${valueArr === ' ' ? ' about__no-info' : ''} ${className ?? ''}`}
        ></div>
      </div>
    );
  }

  return (
    <div className="movie__about">
      <p className="movie__about-title">{title}</p>

      {value && (
        <p
          style={style}
          className={`movie__about-value${value === ' ' ? ' about__no-info' : ''} ${className ?? ''}`}
        >
          {value}
        </p>
      )}

      {valueArr && (
        <div className={`movie__about-value-arr ${className ?? ''}`}>
          {valueArr.map((value, index) => (
            <Link
              key={`${value.name}_${index}`}
              style={style}
              to={
                path === ROUTES.PERSONS
                  ? `${path}/${value.id}`
                  : `${path}/${value.name}`
              }
            >
              {value.name ?? value.enName}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
