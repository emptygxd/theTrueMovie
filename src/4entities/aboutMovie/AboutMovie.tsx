import { useQuery } from '@tanstack/react-query';

import {
  AboutBlock,
  Loader,
  MovieType,
  Series,
  formatNumberWithSpaces,
  http,
} from 'shared';

import './style.scss';

export const AboutMovie = ({ movie }: { movie: MovieType }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['movie', movie.id],
    queryFn: () => {
      if (movie?.isSeries) {
        return http
          .get(`/season?movieId=${movie.id}`)
          .then((response) => response.data.docs);
      }
      return Promise.reject('No series found');
    },
    enabled: movie?.isSeries,
    refetchOnWindowFocus: false,
  });

  const series: Series[] = data;
  let seriesAmount;

  if (series) {
    seriesAmount = series.reduce((acc, element) => {
      return acc + element.episodesCount;
    }, 0);
  }

  const type = movie.isSeries ? 'Сериалы' : 'Фильмы';

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <div className="about__container">
      <h2 className="section-header">О фильме</h2>

      <div className="about__content" key={movie.id}>
        <AboutBlock
          title="Страна"
          valueArr={movie.countries ?? ' '}
          path={`/movies?type=${type}&country=`}
        />

        <AboutBlock
          title="Жанры"
          valueArr={movie.genres.length !== 0 ? movie.genres : ' '}
          path={`/movies?type=${type}&genre=`}
        />

        <AboutBlock
          title="Слоган"
          value={movie.slogan ?? ' '}
          className={movie.slogan ? 'about__slogan' : ''}
        />
        {movie.isSeries && (
          <>
            <AboutBlock title="Количество сезонов" value={series[0]?.number} />
            <AboutBlock title="Количество серий" value={seriesAmount} />

            {movie.totalSeriesLength && (
              <AboutBlock
                title="Общая длительность"
                value={String(movie.totalSeriesLength)}
              />
            )}
          </>
        )}
        {!movie.isSeries && (
          <>
            <AboutBlock
              title="Бюджет"
              value={
                movie.budget.value
                  ? `${movie.budget.currency}${formatNumberWithSpaces(movie.budget.value)}`
                  : ' '
              }
            />

            <AboutBlock
              title="Сборы в мире"
              value={
                movie.fees.world.value
                  ? `${movie.fees.world.currency}${formatNumberWithSpaces(movie.fees.world.value)}`
                  : ' '
              }
            />

            <AboutBlock
              title="Сборы в России"
              value={
                movie.fees.russia?.value
                  ? `${movie.fees.russia.currency}${formatNumberWithSpaces(movie.fees.russia.value)}`
                  : ' '
              }
            />
          </>
        )}

        <AboutBlock
          title="Рейтинг MPAA"
          value={movie.ratingMpaa ? movie.ratingMpaa.toUpperCase() : ' '}
          className={`${movie.ratingMpaa ? 'mpaa' : ''}`}
        />
      </div>
    </div>
  );
};
