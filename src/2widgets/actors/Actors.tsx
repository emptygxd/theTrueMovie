import { Link } from 'react-router-dom';

import { Actor } from 'entities';

import { Person, Arrows } from 'shared';

import './style.scss';

type Props = {
  actors: Person[];
};

export const Actors = ({ actors }: Props) => {
  return (
    <div className="actors">
      <div className="actors__details">
        <h2 className="section-header">В главных ролях</h2>
        <Link to={`/cast`}>Полный список</Link> {/** ПЕРЕДЕЛАТЬ НАВИГАЦИЮ */}
      </div>

      <div className="actors__wrapper">
        <div className="actors__container">
          {actors.map((actor: Person, index) => (
            <Actor key={index} actor={actor} />
          ))}
        </div>
      </div>

      <Arrows />
    </div>
  );
};
