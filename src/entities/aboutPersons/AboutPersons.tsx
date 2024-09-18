import { AboutBlock, Person, ROUTES } from 'shared';

export const AboutPersons = ({ persons }: { persons: Person[] }) => {
  const writers = persons.filter((writer) => writer.enProfession === 'writer');

  const directors = persons.filter(
    (director) => director.enProfession === 'director',
  );
  const producers = persons.filter(
    (producer) => producer.enProfession === 'producer',
  );
  const operators = persons.filter(
    (operator) => operator.enProfession === 'operator',
  );
  const composers = persons.filter(
    (composer) => composer.enProfession === 'composer',
  );
  const designers = persons.filter(
    (designer) => designer.enProfession === 'designer',
  );
  const editors = persons.filter((editor) => editor.enProfession === 'editor');

  return (
    <div className="about__container">
      <h2 className="section-header">Съемочная группа</h2>

      <div className="about__content">
        <AboutBlock
          title="Режисер"
          valueArr={directors.length !== 0 ? directors : ' '}
          path={ROUTES.PERSONS}
        />

        <AboutBlock
          title="Сценарист"
          valueArr={writers.length !== 0 ? writers : ' '}
          path={ROUTES.PERSONS}
        />

        <AboutBlock
          title="Продюсер"
          valueArr={producers.length !== 0 ? producers : ' '}
          path={ROUTES.PERSONS}
        />

        <AboutBlock
          title="Оператор"
          valueArr={operators.length !== 0 ? operators : ' '}
          path={ROUTES.PERSONS}
        />

        <AboutBlock
          title="Композитор"
          valueArr={composers.length !== 0 ? composers : ' '}
          path={ROUTES.PERSONS}
        />

        <AboutBlock
          title="Дизайнер"
          valueArr={designers.length !== 0 ? designers : ' '}
          path={ROUTES.PERSONS}
        />

        <AboutBlock
          title="Монтаж"
          valueArr={editors.length !== 0 ? editors : ' '}
          path={ROUTES.PERSONS}
        />
      </div>
    </div>
  );
};
