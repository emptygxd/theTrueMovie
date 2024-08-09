import { useDispatch } from 'react-redux';

import { userActions } from 'entities';

import {
  StyledButton,
  ShowPassword,
  useShowPassword,
  StyledInput,
  ROUTES,
} from 'shared';

import './style.scss';
import { Link } from 'react-router-dom';

export const Login = () => {
  // const nav = useNavigate();

  // const clickHandler = () => {
  //   nav('/');
  // };
  const { isHidden: isHiddenPassword, showPassword } = useShowPassword();

  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    dispatch(
      userActions.setUser({
        name: form.get('name') as string,
        surname: form.get('surname') as string,
        date: form.get('date') as string,
        job: {
          position: form.get('position') as string,
          salary: Number(form.get('salary')),
        },
      })
    );
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
