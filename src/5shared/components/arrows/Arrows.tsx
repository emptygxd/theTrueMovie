import { ArrowButton, useScrollSlider } from 'shared';

type Props = {
  container: string;
};

export const Arrows = ({ container }: Props) => {
  const {
    isDisabledLeft,
    isDisabledRight,
    onLeftClickHandler,
    onLeftHoverHandler,
    onRightClickHandler,
    onRightHoverHandler,
  } = useScrollSlider(container);

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
