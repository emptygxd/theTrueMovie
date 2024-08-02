import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES, UserModal } from 'shared';

// import { UserModal } from '../modal/userModal/index';

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
      <Link className="userPfp" to={ROUTES.LOGIN}>
        <img
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
          className="userPfp"
          src={user}
          alt="user profile picture"
        />

        <UserModal isOpen={isOpen}>
          <Link to={ROUTES.LOGIN}>Войти</Link>
          <Link to={ROUTES.MAIN}>Выйти</Link>
        </UserModal>
      </Link>
    </>
  );
};
