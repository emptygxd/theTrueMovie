import classNames from 'classnames';

import './style.scss';

type Props = {
  rating: number;
};

export const RatingMovie = ({ rating }: Props) => {
  const roundedRating = rating.toFixed(1);

  const isGreen = rating >= 7;
  const isRed = rating <= 5;

  const ratingClass = classNames({
    'movie__kpScore-value-green': isGreen,
    'movie__kpScore-value-red': isRed,
    'movie__kpScore-value-yellow': !isGreen && !isRed,
    'movie__kpScore-value-gray': !rating,
  });

  return (
    <div className="movie__kpScore">
      <span className={ratingClass}>{roundedRating}</span>
    </div>
  );
};
