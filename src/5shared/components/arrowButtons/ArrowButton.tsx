import left from 'public/assets/left-arrow.png';
import right from 'public/assets/right-arrow.png';

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
        src={direction === 'left' ? left : right}
        alt={`${direction} arrow`}
      />
    </button>
  );
};
