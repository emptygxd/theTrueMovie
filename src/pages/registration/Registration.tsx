import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelector } from 'entities';

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

type FormErrors = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Registration = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);

  useEffect(() => {
    document.title = PAGE_TITLES.REGISTRATION;
    if (user.name) {
      navigate(ROUTES.BASE);
    }
  }, [user]);

  const { isHidden: isHiddenPassword, showPassword } = useShowPassword();

  const {
    isHidden: isHiddenConfirmPassword,
    showPassword: showConfirmPassword,
  } = useShowPassword();

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const nameRegex = /^[^\s]{1,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Za-z\d@$!%*?&]{8,30}$/;

  const validateForm = (form: FormData) => {
    const errors: { [key: string]: string } = {};

    const name = form.get('name') as string;
    const email = form.get('email') as string;
    const password = form.get('password') as string;
    const confirmPassword = form.get('confirmPassword') as string;

    if (!nameRegex.test(name)) {
      errors.name = 'Имя: до 20 символов, без пробелов';
    }

    if (!emailRegex.test(email)) {
      errors.email = 'Неверный email';
    }

    if (!passwordRegex.test(password)) {
      errors.password = 'Пароль: от 8 до 30 символов';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают';
    }

    return errors;
  };

  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const formErrors: Partial<FormErrors> = validateForm(form);

    if (Object.keys(formErrors).length === 0) {
      const user = {
        name: form.get('name') as string,
        email: form.get('email') as string,
        photo: form.get('uploadFile') as string,
      };
      dispatch(userActions.setUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      navigate(ROUTES.BASE, { replace: true });
    } else {
      setErrors(formErrors as FormErrors);
    }
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
              <p className="error">{errors.name}</p>
            </div>

            <div className="form__unit">
              <StyledInput
                type="mail"
                name="email"
                placeholder="Электронная почта"
              />
              <p className="error">{errors.email}</p>
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
              <p className="error">{errors.password}</p>
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
              <p className="error">{errors.confirmPassword}</p>
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
