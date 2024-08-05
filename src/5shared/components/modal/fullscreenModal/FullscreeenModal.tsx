import { ReactNode } from 'react';

import './style.scss';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export const FullscreenModal = ({ isOpen, children }: Props) => {
  const isOpenClass = isOpen ? 'opened' : 'hidden';

  return (
    <div className={`FSModal__overlay ${isOpenClass}`}>
      <div className={`FSModal__content `}>{children}</div>
    </div>
  );
};
