import { useEffect, useState } from 'react';

export const useScrollSlider = (sliderName: string) => {
  const [isDisabledLeft, setIsDisabledLeft] = useState(true);
  const [isDisabledRight, setIsDisabledRight] = useState(false);
  const [offset, setOffset] = useState(0);

  const slider = document.querySelector(sliderName);

  const getScrollAmount = () => {
    return window.innerWidth <= 480
      ? 150
      : window.innerWidth <= 768
        ? 500
        : 700;
  };

  const onRightClickHandler = () => {
    const scrollAmount = getScrollAmount();
    setOffset((prev) => prev - scrollAmount);
  };

  const onLeftClickHandler = () => {
    const scrollAmount = getScrollAmount();
    setOffset((prev) => prev + scrollAmount);
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

    if (sliderWidth && sliderWidth + offset < getScrollAmount()) {
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
