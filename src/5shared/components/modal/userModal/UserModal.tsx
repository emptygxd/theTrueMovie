import { ReactNode } from 'react';
import Modal from 'react-modal';

import './style.scss';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export const UserModal = ({ isOpen, children }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'userModal__overlay'}
      className={'userModal__content'}
      ariaHideApp={false}
      closeTimeoutMS={300}
    >
      {children}
    </Modal>
  );
};
