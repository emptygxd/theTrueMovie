import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  disableScroll,
  enableScroll,
  FullscreenModal,
  MENU_ROUTES,
} from 'shared';

import './style.scss';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => {
      if (prev) {
        enableScroll();
      } else {
        disableScroll();
      }
      return !prev;
    });
  };

  return (
    <>
      <div className="menu">
        <div onClick={handleClick}>
          <button className={`lines-button lines ${isOpen ? 'close' : ''}`}>
            <span></span>
          </button>

          <h3 className="menu__title">Меню</h3>
        </div>

        <FullscreenModal isOpen={isOpen}>
          {MENU_ROUTES.map((route) => (
            <Link onClick={handleClick} to={route.path} key={route.id}>
              {route.name}
            </Link>
          ))}
        </FullscreenModal>
      </div>
    </>
  );
};
