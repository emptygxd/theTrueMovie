import './style.scss';

export const RatingMovie = ({ rating }: { rating: number }) => {
  const isGreen = rating >= 7;
  const isRed = rating <= 5;

  return (
    <div className="movie__kpScore">
      <span
        className={
          isGreen
            ? 'movie__kpScore-value-green'
            : isRed
              ? 'movie__kpScore-value-red'
              : 'movie__kpScore-value-yellow'
        }
      >
        {rating}
      </span>
    </div>
  );
};
