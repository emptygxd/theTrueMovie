import { useDispatch } from 'react-redux';

import { userActions } from 'entities';

import {
  StyledButton,
  ShowPassword,
  useShowPassword,
  StyledInput,
} from 'shared';

import './style.scss';

export const Login = () => {
  // const nav = useNavigate();

  // const clickHandler = () => {
  //   nav('/');
  // };
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
    <>
      <form onSubmit={submitHandler} className="form">
        <div className="form__unit">
          <StyledInput type="text" name="name" placeholder="Имя пользователя" />
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

          <ShowPassword isHidden={isHiddenPassword} callback={showPassword} />
        </div>

        <div className="form__unit">
          <StyledInput
            type={isHiddenConfirmPassword === 'hidden' ? 'password' : 'text'}
            name="confirmPassword"
            placeholder="Подтвердите пароль"
          />

          <ShowPassword
            isHidden={isHiddenConfirmPassword}
            callback={showConfirmPassword}
          />
        </div>

        <StyledButton>Подтвердить</StyledButton>
      </form>
    </>
  );
};
