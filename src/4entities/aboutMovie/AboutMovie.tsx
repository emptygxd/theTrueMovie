import { AboutBlock, MovieType2, ROUTES, formatNumberWithSpaces } from 'shared';

import './style.scss';

export const AboutMovie = ({ movie }: { movie: MovieType2 }) => {
  return (
    <div className="about__container">
      <h2 className="section-header">О фильме</h2>

      <div className="about__content" key={movie.id}>
        <AboutBlock
          title="Страна"
          valueArr={movie.countries}
          path={ROUTES.COUNTRIES}
        />
        <AboutBlock
          title="Жанры"
          valueArr={movie.genres}
          path={ROUTES.GENRES}
        />
        <AboutBlock
          title="Слоган"
          value={`«${movie.slogan}»`}
          style={{ color: 'var(--text-subtle-color)' }}
        />
        <AboutBlock
          title="Бюджет"
          value={`${movie.budget.currency}${formatNumberWithSpaces(movie.budget.value)}`}
        />
        <AboutBlock
          title="Сборы в мире"
          value={`${movie.fees.world.currency}${formatNumberWithSpaces(movie.fees.world.value)}`}
        />
        {movie.fees.russia && (
          <AboutBlock
            title="Сборы в России"
            value={`${movie.fees.russia.currency}${formatNumberWithSpaces(movie.fees.russia.value)}`}
          />
        )}
        <AboutBlock
          title="Рейтинг MPAA"
          value={movie.ratingMpaa.toUpperCase()}
          className="mpaa"
        />
      </div>
    </div>
  );
};
