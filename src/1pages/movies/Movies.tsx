import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { RatingMovie } from 'entities';

import { http, ROUTES } from 'shared';

import noImage from 'public/assets/noImage.jpg';

import './style.scss';
import { MoviesType } from './types';
// '/movie?page=1&limit=10&selectFields=id,name,alternativeName,movieLength,poster,rating,year,genres&notNullFields=top250&sortField=top250&sortType=1&lists=top250'
//movie?page=1&limit=50&notNullFields=top250&sortField=top250&sortType=1&lists=top250
export const Movies = () => {
  // const { isLoading, data } = useQuery({
  //   queryKey: ['movies'],
  //   queryFn: () => {
  //     return http.get(
  //       '/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=top250'
  //     );
  //   },
  //   select: (data) => data.data.docs,
  // });

  // localStorage.setItem('movies', JSON.stringify(data));
  const data = JSON.parse(localStorage.getItem('movies') || '');
  console.log(data);
  // console.log('-------------------------------------');
  // const data2 = [mockMovie2];
  return (
    <section className="movies">
      {/* {isLoading && <div>loading...</div>} */}
      {data?.map((movie: MoviesType) => {
        const hours = Math.floor(movie.movieLength / 60);
        const minutes = movie.movieLength % 60;

        const hoursString = hours !== 0 ? `${hours} ч ` : '';

        const russianName = movie.name ? movie.name : movie.alternativeName;
        const altName = movie.alternativeName
          ? `${movie.alternativeName}, `
          : '';

        return (
          <Link to={`${ROUTES.MOVIES}/${movie.id}`}>
            <div className="movies__item">
              <div className="movies__poster">
                <img
                  src={movie.poster ? movie.poster.url : noImage}
                  alt="poster"
                />

                <RatingMovie
                  rating={movie.rating.kp ? movie.rating.kp : movie.rating.imdb}
                />
              </div>

              <div className="movies__description">
                <h3 title={russianName}>{russianName}</h3>

                <p title={`${movie.name ? `${altName}, ` : ''}${movie.year}`}>
                  {movie.name ? `${altName}` : ''}
                  {movie.year}
                </p>

                <p
                  title={`${movie.genres[0].name}${movie.movieLength ? `, ${hoursString}${minutes} мин` : ''}`}
                >
                  {movie.genres[0].name}
                  {movie.movieLength ? `, ${hoursString}${minutes} мин` : ''}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};
