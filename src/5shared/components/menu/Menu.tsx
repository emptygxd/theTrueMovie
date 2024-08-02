import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FullscreenModal, MENU_ROUTES } from 'shared';

import './style.scss';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => {
      if (prev) {
        setTimeout(() => {
          document.body.style.paddingRight = '';
        }, 300);
      } else {
        const root: HTMLElement | null = document.querySelector('#root');
        const offset: number = root?.offsetWidth || 0;
        document.body.style.paddingRight = window.innerWidth - offset + 'px';
      }
      return !prev;
    });
  };

  return (
    <>
      <div onClick={handleClick} className="menu">
        <button className={`lines-button lines ${isOpen ? 'close' : ''}`}>
          <span></span>
        </button>

        <h3 className="menu__title">Меню</h3>
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
