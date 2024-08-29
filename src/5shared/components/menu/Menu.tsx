import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FullscreenModal, MENU_ROUTES } from 'shared';

import './style.scss';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => {
      if (prev) {
        document.body.style.overflowY = 'auto';
        document.body.style.paddingRight = '';
      } else {
        const bodyWithScrollbar = document.body.offsetWidth;
        document.body.style.overflowY = 'hidden';

        const bodyWithoutScrollbar = document.body.offsetWidth;

        const scrollbarWidth = bodyWithoutScrollbar - bodyWithScrollbar;

        document.body.style.paddingRight = scrollbarWidth + 'px';
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
