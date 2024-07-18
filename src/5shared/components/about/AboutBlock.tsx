import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import { Country, Genre, Person } from 'shared';

import './style.scss';

type Props = {
  title: string;
  value?: string;
  currency?: string;
  valueArr?: Country[] | Person[] | Genre[];
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
  return (
    <div className="movie__about">
      <p className="movie__about-title">{title}</p>

      {value && (
        <p style={style} className={`movie__about-value ${className}`}>
          {value}
        </p>
      )}

      {valueArr && (
        <div className={`movie__about-value-arr  ${className}`}>
          {valueArr.map((value, index) => (
            <Link
              key={`${value.name}_${index}`}
              style={style}
              to={`/${path}/${value.name}`}
            >
              {value.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
