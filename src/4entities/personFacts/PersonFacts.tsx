import { Person } from 'pages';

import './style.scss';

type Props = {
  person: Person;
};

export const PersonFacts = ({ person }: Props) => {
  return (
    <div className="content__plot facts">
      <h2 className="section-header">Знали ли вы, что...</h2>

      <div className="facts__container">
        {person.facts.map((fact, index) => (
          <p className="person__age-separator facts__item" key={index}>
            {fact.value}
          </p>
        ))}
      </div>
    </div>
  );
};
