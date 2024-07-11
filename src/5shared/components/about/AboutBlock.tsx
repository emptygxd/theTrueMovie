import { Link } from 'react-router-dom';
import './style.scss';
import { CSSProperties } from 'react';

type Props = {
  title: string;
  value?: string;
  currency?: string;
  valueArr?: string[];
  path?: string;
  style?: CSSProperties;
  className?: string;
};

const AboutBlock = ({
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
          {valueArr.map((value,index) => (
            <Link key={`${value}_${index}`} style={style} to={`/${path}/${value}`}>
              {value}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutBlock;
