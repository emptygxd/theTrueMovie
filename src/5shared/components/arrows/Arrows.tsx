import { ArrowButton } from 'shared/components/arrowButtons';

import './style.scss';
import { useEffect, useState } from 'react';

export const Arrows = () => {
  const [isDisabledLeft, setIsDisabledLeft] = useState(true);
  const [isDisabledRight, setIsDisabledRight] = useState(false);
  const [offset, setOffset] = useState(0);

  const slider = document.querySelector('.actors__container');
  
  const onRightClickHandler = () => {
    setOffset((prev) => prev - 1000);
  };

  const onLeftClickHandler = () => {
    setOffset((prev) => prev + 1000);
  };

  const onRightHoverHandler = () => {
    setOffset((prev) => prev - 10);
  };

  const onLeftHoverHandler = () => {
    setOffset((prev) => prev + 10);
  };

  useEffect(() => {
    slider?.setAttribute('style', `transform: translateX(${offset}px)`);
  });
  return (
    <>
      <ArrowButton
        direction="left"
        isDisabled={isDisabledLeft}
        onClick={onLeftClickHandler}
        onMouseOver={onLeftHoverHandler}
        onMouseOut={onRightHoverHandler}
      />

      <ArrowButton
        direction="right"
        isDisabled={isDisabledRight}
        onClick={onRightClickHandler}
        onMouseOver={onRightHoverHandler}
        onMouseOut={onLeftHoverHandler}
      />
    </>
  );
};
