import { leftArrowImg, rightArrowImg } from 'assets';

import './style.scss';

type Props = {
  direction: 'left' | 'right';
  isDisabled: boolean;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
};

export const ArrowButton = ({
  direction,
  isDisabled,
  onClick,
  onMouseOver,
  onMouseOut,
}: Props) => {
  return (
    <button
      id="arrow"
      className={`arrow arrow__${direction} `}
      disabled={isDisabled}
      onClick={onClick}
      onMouseOverCapture={onMouseOver}
      onMouseOutCapture={onMouseOut}
    >
      <img
        src={direction === 'left' ? leftArrowImg : rightArrowImg}
        alt={`${direction} arrow`}
      />
    </button>
  );
};
