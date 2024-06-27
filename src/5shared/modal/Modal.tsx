import { ChangeEvent, MouseEventHandler } from 'react';
import './modal.css';

type Props = {
  isOpen: boolean;
  onClose: (resp: boolean) => void;
};

export const Modal = ({ isOpen, onClose }: Props) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    if (event.target.classList.contains('modal__wrapper')) {
      onClose(false);
    }
  };

  return (
    <div className={`modal modal-${isOpen}`}>
      <div className="modal__wrapper" onClick={handleModalClick}>
        <div className="modal__content">asdasd</div>
      </div>
    </div>
  );
};
