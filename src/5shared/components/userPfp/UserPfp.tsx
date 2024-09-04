import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES, USER_MENU_ROUTES, UserModal } from 'shared';

import user from 'public/assets/user.png';

import './style.scss';

export const UserPfp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onMouseOverHandler = () => {
    setIsOpen(true);
  };

  const onMouseOutHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="userPfp__container"
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
      >
        <Link to={ROUTES.REGISTRATION}>
          <img className="userPfp" src={user} alt="user profile picture" />
        </Link>
        {isOpen && <UserModal items={USER_MENU_ROUTES} />}
      </div>
    </>
  );
};
