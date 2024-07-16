import { Person } from 'shared/types';

import './style.scss';
type Props = {
  actor: Person;
};

export const Actor = ({ actor }: Props) => {
  return (
    <div className="actor">
      <img className="actor__photo" src={actor.photo} alt="photo" />
      <div className="actor__info">
        <h3 className="actor__name">{actor.name}</h3>
        {actor.description && (
          <h4 className="actor__description">{actor.description}</h4>
        )}
        {actor.profession && (
          <p className="actor__profession">{actor.profession}</p>
        )}
      </div>
    </div>
  );
};

// id: 251264,
//   photo:
//     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_251264.jpg',
//   name: 'Евгений Иванов',
//   enName: null,
//   description: null, role

// photo: string;
// name: string;
// description: string;
// profession: string;

// id: number;
