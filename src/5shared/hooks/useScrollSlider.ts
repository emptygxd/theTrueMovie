import { useEffect, useState } from 'react';

export const useScrollSlider = (sliderName: string) => {
  const [isDisabledLeft, setIsDisabledLeft] = useState(true);
  const [isDisabledRight, setIsDisabledRight] = useState(false);
  const [offset, setOffset] = useState(0);

  const slider = document.querySelector(sliderName);

  const onRightClickHandler = () => {
    setOffset((prev) => prev - 700);
  };

  const onLeftClickHandler = () => {
    setOffset((prev) => prev + 700);
  };

  const onRightHoverHandler = () => {
    setOffset((prev) => prev - 10);
  };

  const onLeftHoverHandler = () => {
    setOffset((prev) => prev + 10);
  };

  useEffect(() => {
    const sliderWidth = slider?.scrollWidth;
  
    if (offset >= -10) {
      setIsDisabledLeft(true);
    } else {
      setIsDisabledLeft(false);
    }

    if (sliderWidth && sliderWidth + offset < 1200) {
      setIsDisabledRight(true);
    } else {
    setIsDisabledRight(false);
    }

    slider?.setAttribute('style', `transform: translateX(${offset}px)`);
  }, [slider, offset]);

  return {
    isDisabledLeft,
    isDisabledRight,
    onRightClickHandler,
    onLeftClickHandler,
    onRightHoverHandler,
    onLeftHoverHandler,
  };
};
