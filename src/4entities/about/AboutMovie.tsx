import { AboutBlock } from '@shared/components/about';
import { MovieType, MovieType2 } from '@shared/types';

import './style.scss';
import { formatNumberWithSpaces } from '@shared/helperFunctions';

const AboutMovie = ({ movies }: { movies: MovieType2[] }) => {
  const hours = Math.floor(movies[0].movieLength / 60);

  const writers = movies[0].persons.filter(
    (writer) => writer.enProfession === 'writer'
  );
  const directors = movies[0].persons.filter(
    (director) => director.enProfession === 'director'
  );
  const producers = movies[0].persons.filter(
    (producer) => producer.enProfession === 'producer'
  );
  const operators = movies[0].persons.filter(
    (operator) => operator.enProfession === 'operator'
  );
  const composers = movies[0].persons.filter(
    (composer) => composer.enProfession === 'composer'
  );
  const designers = movies[0].persons.filter(
    (designer) => designer.enProfession === 'designer'
  );
  const editors = movies[0].persons.filter(
    (editor) => editor.enProfession === 'editor'
  );

  return (
    <>
      {movies.map((movie: MovieType2) => (
        <div className="about__container" key={movie.id}>
          <AboutBlock
            title="Страна"
            valueArr={movie.countries.map((country) => country.name)}
            path="countries"
          />

          <AboutBlock
            title="Жанры"
            valueArr={movie.genres.map((genre) => genre.name)}
            path="genres"
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

          <AboutBlock
            title="Сборы в России"
            value={`${movie.fees.russia.currency}${formatNumberWithSpaces(movie.fees.russia.value)}`}
          />

          <AboutBlock
            title="Режисер"
            valueArr={directors.map((director) => director.name)}
          />
          <AboutBlock
            title="Сценарист"
            valueArr={writers.map((writer) => writer.name)}
          />
          <AboutBlock
            title="Продюсер"
            valueArr={producers.map((producer) => producer.name)}
          />
          <AboutBlock
            title="Оператор"
            valueArr={operators.map((operator) => operator.name)}
          />
          <AboutBlock
            title="Композитор"
            valueArr={composers.map((composer) => composer.name)}
          />
          <AboutBlock
            title="Дизанер"
            valueArr={designers.map((designer) => designer.name)}
          />
          <AboutBlock
            title="Монтаж"
            valueArr={editors.map((editor) => editor.name)}
          />

          <AboutBlock
            title="Длительность"
            value={`${hours} ч. ${movie.movieLength - hours * 60} мин.`}
            style={{ color: 'var(--text-subtle-color)' }}
          />

          <AboutBlock
            title="Рейтинг MPAA"
            value={movie.ratingMpaa.toUpperCase()}
            className="mpaa"
          />
        </div>
      ))}
    </>
  );
};

export default AboutMovie;
