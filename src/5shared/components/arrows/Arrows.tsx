import { ArrowButton, useScrollSlider } from 'shared';

export const Arrows = () => {
  const {
    isDisabledLeft,
    isDisabledRight,
    onLeftClickHandler,
    onLeftHoverHandler,
    onRightClickHandler,
    onRightHoverHandler,
  } = useScrollSlider('.actors__container');

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
