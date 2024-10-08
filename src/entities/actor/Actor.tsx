import { Link } from 'react-router-dom';

import { Person, ROUTES } from 'shared';

import './style.scss';

type Props = {
  actor: Person;
};

export const Actor = ({ actor }: Props) => {
  return (
    <Link to={`${ROUTES.BASE}persons/${actor.id}`} className="actor">
      <img
        className="actor__photo"
        loading="lazy"
        src={actor.photo}
        alt="photo"
      />

      <div className="actor__info">
        <h3 className="actor__name">
          {actor.name ? actor.name : actor.enName}
        </h3>

        {actor.description && (
          <h4 title={actor.description} className="actor__description">
            {actor.description}
          </h4>
        )}
      </div>
    </Link>
  );
};
