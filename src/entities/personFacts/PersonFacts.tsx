import parse from 'html-react-parser';

import { PersonFull } from 'shared';

import './style.scss';

type Props = {
  person: PersonFull;
};

export const PersonFacts = ({ person }: Props) => {
  return (
    <div className="facts__wrapper">
      <div className="content__plot facts">
        <h2 className="section-header">Знали ли вы, что...</h2>

        <div className="facts__container">
          {person.facts.map((fact, index) => (
            <p className="person__age-separator facts__item" key={index}>
              {parse(fact.value)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
