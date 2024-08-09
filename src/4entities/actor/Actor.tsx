import { Link } from 'react-router-dom';

import { Person } from 'shared';

import './style.scss';

type Props = {
  actor: Person;
};

export const Actor = ({ actor }: Props) => {
  return (
    <Link to={`/actors/${actor.id}`} className="actor">
      <img
        className="actor__photo"
        loading="lazy"
        src={actor.photo}
        alt="photo"
      />

      <div className="actor__info">
        <h3 className="actor__name">{actor.name}</h3>

        {actor.description && (
          <h4 className="actor__description">{actor.description}</h4>
        )}

        {actor.profession && (
          <p className="actor__profession">{actor.profession}</p>
        )}
      </div>
    </Link>
  );
};
