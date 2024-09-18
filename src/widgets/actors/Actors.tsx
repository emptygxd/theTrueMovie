import { Link, useParams } from 'react-router-dom';

import { Actor } from 'entities';

import { Person, Arrows, ROUTES } from 'shared';

import './style.scss';

type Props = {
  persons: Person[];
};

export const Actors = ({ persons }: Props) => {
  const { movieId } = useParams();
  const actors = persons.filter((actor) => actor.enProfession === 'actor');
  return (
    <div className="actors">
      <div className="actors__details">
        <h2 className="section-header">В главных ролях</h2>
        <Link to={`${ROUTES.MOVIES}/${movieId}/${ROUTES.CAST}`}>
          Полный список
        </Link>
      </div>

      <div className="actors__wrapper">
        <div className="actors__container">
          {actors.map((actor: Person, index) => (
            <Actor key={`${actor}_${index}`} actor={actor} />
          ))}
        </div>
      </div>

      <Arrows container=".actors__container" />
    </div>
  );
};
