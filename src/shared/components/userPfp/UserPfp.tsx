import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userNameSelector } from 'entities';

import { ROUTES, USER_MENU_ROUTES, UserModal } from 'shared';

import { userImg } from 'assets';

import './style.scss';

export const UserPfp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isUser = useSelector(userNameSelector);

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
        <Link to={isUser ? ROUTES.USER : ROUTES.LOGIN}>
          <img className="userPfp" src={userImg} alt="user profile picture" />
        </Link>

        {isUser && isOpen && <UserModal items={USER_MENU_ROUTES} />}
      </div>
    </>
  );
};
