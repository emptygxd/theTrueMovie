import { AboutBlock, MovieType2, ROUTES, formatNumberWithSpaces } from 'shared';

import './style.scss';

export const AboutMovie = ({ movie }: { movie: MovieType2 }) => {
  console.log(movie.genres.length);
  return (
    <div className="about__container">
      <h2 className="section-header">О фильме</h2>

      <div className="about__content" key={movie.id}>
        <AboutBlock
          title="Страна"
          valueArr={movie.countries ?? ' '}
          path={ROUTES.COUNTRIES}
        />

        <AboutBlock
          title="Жанры"
          valueArr={movie.genres.length !== 0 ? movie.genres : ' '}
          path={ROUTES.GENRES}
        />

        <AboutBlock
          title="Слоган"
          value={movie.slogan ?? ' '}
          className={movie.slogan ? 'about__slogan' : ''}
        />
        {movie.isSeries && (
          <>
            <AboutBlock title="Количество сезонов" value={``} />
            <AboutBlock title="Количество серий" value={``} />

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
