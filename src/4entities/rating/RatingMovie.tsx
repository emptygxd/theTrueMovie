import { MovieType } from '../../5shared/types';
import { MovieType2 } from '@shared/types/movie';

import star from '@public/assets/star.png';

import './style.scss';

export const RatingMovie = ({ movies }: { movies: MovieType2[] }) => {
  const theMovie = movies[0];
  // const roundedVotes = Math.round(Number(theMovie.imdbVotes.replace(',', '.')));
  // const isGreen = Number(theMovie.Metascore) > 60;
  // const isRed = Number(theMovie.Metascore) < 40;

  return (
    <div className="movie__rating">
      <p>{theMovie.rating.kp.toPrecision(2)}</p>
      <p>{theMovie.votes.kp}</p>
    </div>
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

    //   <div className="movie__metascore">
    //     <span
    //       className={
    //         isGreen
    //           ? 'movie__metascore-value-green'
    //           : isRed
    //             ? 'movie__metascore-value-red'
    //             : 'movie__metascore-value-yellow'
    //       }
    //     >
    //       {theMovie.Metascore}
    //     </span>
    //     <p className="movie__metascore-title">Metascore</p>
    //   </div>
    // </div>
  );
};
