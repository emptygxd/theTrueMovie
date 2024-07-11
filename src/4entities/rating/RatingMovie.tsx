import { MovieType2 } from 'shared/types/movie';

import './style.scss';

export const RatingMovie = ({ movies }: { movies: MovieType2[] }) => {
  const theMovie = movies[0];
  // const rating = Math.round(Number(theMovie.imdbVotes.replace(',', '.')));theMovie.rating.kp.toPrecision(2)
  const rating = Number(theMovie.rating.kp.toPrecision(2));
  const isGreen = rating >= 7;
  const isRed = rating <= 5;

  return (
    <>
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
    </>
    //   <div className="movie__imdb">
    //     <p className="movie__imdb-title">imdbRating</p>

    //     <div className="movie__imdb-rating">
    //       <img className="movie__imdb-img" src={star} alt="star" />

    //       <div>
    //         <p className="movie__imdb-value">
    //           <span>{theMovie.imdbRating}</span>/10
    //         </p>
    //         <p className="movie__imdb-value">{roundedVotes}K</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
