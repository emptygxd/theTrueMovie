import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelector } from 'entities';

import {
  StyledButton,
  ShowPassword,
  useShowPassword,
  StyledInput,
  ROUTES,
  PAGE_TITLES,
} from 'shared';

import './style.scss';

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);

  useEffect(() => {
    document.title = PAGE_TITLES.LOGIN;
    if (user.name) {
      navigate(ROUTES.BASE);
    }
  }, [user]);

  const { isHidden: isHiddenPassword, showPassword } = useShowPassword();

  const dispatch = useDispatch();

  const [errors, setErrors] = useState('');

  const accountData = localStorage.getItem('user');
  const account = accountData ? JSON.parse(accountData) : null;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email') as string;
    const password = form.get('password') as string;
    if (email && password) {
      if (account && account.email === email && account.password === password) {
        const { password, ...accountWithoutPassword } = account;
        dispatch(userActions.setUser(accountWithoutPassword));
      } else {
        setErrors('Неверный email или пароль');
      }
    } else {
      setErrors('Поля должны быть заполнены');
    }
  };

  return (
    <section className="form__container">
      <form onSubmit={submitHandler} className="form">
        <h2>Вход</h2>

        <div className="login__container">
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

            <ShowPassword isHidden={isHiddenPassword} callback={showPassword} />

            <p className="error">{errors}</p>
          </div>
        </div>

        <div className="form__buttons">
          <StyledButton>Подтвердить</StyledButton>
          <p>
            Нет аккаунта?{' '}
            <Link to={ROUTES.REGISTRATION}>Зарегистрироваться</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
