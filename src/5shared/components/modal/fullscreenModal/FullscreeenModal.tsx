import { ReactNode } from 'react';

import './style.scss';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export const FullscreenModal = ({ isOpen, children }: Props) => {
  const isOpenClass = isOpen ? 'opened' : 'hidden';

  return (
    <div className={`FSModal__content ${isOpenClass}`}>{children}</div>

    // <Modal
    // isOpen={isOpen}
    // overlayClassName={'FSModal__overlay'}
    // className={'FSModal__content'}
    // ariaHideApp={false}
    // closeTimeoutMS={300}
    // >
    // {children}
    // </Modal>
  );
};
