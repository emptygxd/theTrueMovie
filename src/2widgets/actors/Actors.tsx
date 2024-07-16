import { Person } from 'shared/types';

import './style.scss';
import { Actor } from 'entities/actor';
import { Link } from 'react-router-dom';
import { Arrows } from 'shared/components/arrows';
import { useState } from 'react';

type Props = {
  actors: Person[];
};

export const Actors = ({ actors }: Props) => {
  const [isHovered, setIsHovered] = useState<'show' | ''>('');

  const mouseOverHandler = () => {
    setIsHovered('show');
  };

  const mouseLeaveHandler = () => {
    setIsHovered('');
  };
  return (
    <div className={`actors ${isHovered}`}>
      <Arrows />
      <div className="actors__details">
        <h2 className="section-header">В главных ролях</h2>
        <Link to={`/cast`}>Полный список</Link> {/** ПЕРЕДЕЛАТЬ НАВИГАЦИЮ */}
      </div>

      <div
        className="actors__container"
        onMouseOverCapture={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {actors.map((actor: Person, index) => (
          <Actor key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
};
