import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FullscreenModal } from '@shared/components/modal';
import { MENU_ROUTES } from '@shared/constants';

import './style.scss';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // let padding: string = '0';
  // const scrollWidth = ;
  // console.log(scrollWidth);
  // console.log(window.innerWidth);
  // if (scrollWidth !== undefined) {
  //   padding = window.innerWidth - scrollWidth + 'px';
  //   console.log(padding);
  // }

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
        <h3 className="menu__title">Menu</h3>
      </div>
      <FullscreenModal isOpen={isOpen}>
        {MENU_ROUTES.map((route) => (
          <Link onClick={handleClick} to={route.path} key={route.id}>
            {route.name}
          </Link>
        ))}
      </FullscreenModal>
    </>
  );
};
