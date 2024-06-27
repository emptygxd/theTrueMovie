import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/constants';

import '/public/fonts/oxygen.css';
import './style.css';
import { Modal } from '../modal/Modal';

export const Header = () => {
  const [isMenu, setIsMenu] = useState<'close' | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isMenu) {
      setIsMenu(undefined);
    } else {
      setIsMenu('close');
    }
  };

  return (
    <div className="header__container">
      <button onClick={handleClick} className="lines-button lines" id={isMenu}>
        <span></span>
      </button>
      <Modal isOpen={isOpen} onClose={setIsOpen} />
      <h3 className="header__menu">menu</h3>
      <Link to={ROUTES.MAIN}>Home</Link>
      <Link to={ROUTES.MOVIES}>Movies</Link>
      <Link to={ROUTES.SERIES}>Series</Link>
      <Link to={ROUTES.LOGIN}>Login</Link>
    </div>
  );
};
