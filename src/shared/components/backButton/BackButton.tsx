import { useNavigate } from 'react-router-dom';

import arrow from 'public/assets/left-arrow.png';

import './style.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };

  return (
    <div className="back" onClick={onClickHandler}>
      <div className="back__img-container">
        <img className="back__img" src={arrow} alt="left arrow" />
      </div>
      <p>Вернуться</p>
    </div>
  );
};
