import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userActions } from 'entities';

import {
  StyledButton,
  ShowPassword,
  useShowPassword,
  StyledInput,
  StyledFileInput,
  ROUTES,
  PAGE_TITLES,
} from 'shared';

import './style.scss';

const Registration = () => {
  useEffect(() => {
    document.title = PAGE_TITLES.REGISTRATION;
  }, []);

  const { isHidden: isHiddenPassword, showPassword } = useShowPassword();

  const {
    isHidden: isHiddenConfirmPassword,
    showPassword: showConfirmPassword,
  } = useShowPassword();

  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    dispatch(
      userActions.setUser({
        name: form.get('name') as string,
        email: form.get('email') as string,
        password: form.get('password') as string,
        photo: form.get('uploadFile') as string,
      })
    );
  };

  return (
    <section className="form__container">
      <form onSubmit={submitHandler} className="form">
        <h2>Регистрация</h2>

        <div className="registration__container">
          <div className="form__left">
            <div className="form__unit">
              <StyledInput
                type="text"
                name="name"
                placeholder="Имя пользователя"
              />
            </div>

            <div className="form__unit">
              <StyledInput
                type="mail"
                name="email"
                placeholder="Электронная почта"
              />
            </div>

            <div className="form__unit">
              <StyledInput
                type={isHiddenPassword === 'hidden' ? 'password' : 'text'}
                name="password"
                placeholder="Пароль"
              />

              <ShowPassword
                isHidden={isHiddenPassword}
                callback={showPassword}
              />
            </div>

            <div className="form__unit">
              <StyledInput
                type={
                  isHiddenConfirmPassword === 'hidden' ? 'password' : 'text'
                }
                name="confirmPassword"
                placeholder="Подтвердите пароль"
              />

              <ShowPassword
                isHidden={isHiddenConfirmPassword}
                callback={showConfirmPassword}
              />
            </div>
          </div>

          <span className="form__line-between"></span>

          <div className="form__right">
            <StyledFileInput name="uploadFile" placeholder="Выберите файл" />
          </div>
        </div>

        <div className="form__buttons">
          <StyledButton>Подтвердить</StyledButton>
          <p>
            Уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Registration;
