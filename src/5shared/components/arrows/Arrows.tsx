import leftArrow from 'public/assets/left-arrow.png';
import rightArrow from 'public/assets/right-arrow.png';
import './style.scss';
import { useState } from 'react';

type Highlight = 'highlight' | 'half-highlight' | '';

export const Arrows = () => {
  const [isLeftHovered, setIsLeftHovered] = useState<Highlight>('');
  const [isRightHovered, setIsRightHovered] = useState<Highlight>('');

  const onMouseOverLeftHandler = () => {
    setIsLeftHovered('highlight');
    setIsRightHovered('half-highlight');
  };

  const onMouseOverRightHandler = () => {
    setIsLeftHovered('half-highlight');
    setIsRightHovered('highlight');
  };

  const onMouseLeaveHandler = () => {
    setIsLeftHovered('');
    setIsRightHovered('');
  };

  return (
    <>
      <span
        className={`arrow arrow__left ${isLeftHovered}`}
        onMouseOver={onMouseOverLeftHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img src={leftArrow} alt="left arrow" />
      </span>
      <span
        className={`arrow arrow__right ${isRightHovered}`}
        onMouseOver={onMouseOverRightHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img src={rightArrow} alt="right arrow" />
      </span>
    </>
  );
};
