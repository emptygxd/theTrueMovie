import { AboutBlock } from 'shared/components/about';
import { Person } from 'shared/types';

export const AboutPersons = ({ persons }: { persons: Person[] }) => {
  const writers = persons.filter((writer) => writer.enProfession === 'writer');

  const directors = persons.filter(
    (director) => director.enProfession === 'director'
  );
  const producers = persons.filter(
    (producer) => producer.enProfession === 'producer'
  );
  const operators = persons.filter(
    (operator) => operator.enProfession === 'operator'
  );
  const composers = persons.filter(
    (composer) => composer.enProfession === 'composer'
  );
  const designers = persons.filter(
    (designer) => designer.enProfession === 'designer'
  );
  const editors = persons.filter((editor) => editor.enProfession === 'editor');

  return (
    <div className="about__container">
      <h2 className="section-header">Съемочная группа</h2>
      <div className="about__content">
        <AboutBlock title="Режисер" valueArr={directors} />

        <AboutBlock title="Сценарист" valueArr={writers} />

        <AboutBlock title="Продюсер" valueArr={producers} />

        <AboutBlock title="Оператор" valueArr={operators} />

        <AboutBlock title="Композитор" valueArr={composers} />

        <AboutBlock title="Дизайнер" valueArr={designers} />

        <AboutBlock title="Монтаж" valueArr={editors} />
      </div>
    </div>
  );
};
