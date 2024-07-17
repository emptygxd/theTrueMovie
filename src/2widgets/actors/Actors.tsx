import { Link } from 'react-router-dom';

import { Actor } from 'entities/actor';

import { Person } from 'shared/types';
import { Arrows } from 'shared/components/arrows';

import './style.scss';
import { useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';

type Props = {
  actors: Person[];
};

export const Actors = ({ actors }: Props) => {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  return (
    <div className="actors">
      <div className="actors__details">
        <h2 className="section-header">В главных ролях</h2>
        <Link to={`/cast`}>Полный список</Link> {/** ПЕРЕДЕЛАТЬ НАВИГАЦИЮ */}
      </div>

        <Arrows />
      <div ref={hoverRef} className="actors__container">
        {actors.map((actor: Person, index) => (
          <Actor key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
};
