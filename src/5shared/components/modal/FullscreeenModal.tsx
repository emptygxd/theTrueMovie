import { ReactNode } from 'react';
import Modal from 'react-modal';

import './style.scss';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export const FullscreenModal = ({ isOpen, children }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'modal__overlay'}
      className={'modal__content'}
      ariaHideApp={false}
      closeTimeoutMS={300}
    >
      {children}
    </Modal>
  );
};
