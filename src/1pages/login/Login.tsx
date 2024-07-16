import { useDispatch } from 'react-redux';

import { userActions } from 'entities/movie/slice';

import './style.scss';

export const Login = () => {
  // const nav = useNavigate();

  // const clickHandler = () => {
  //   nav('/');
  // };

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
          <label>Имя пользователя</label>
          <input type="text" name="name" />
        </div>

        <div className="form__unit">
          <label>Электронная почта</label>
          <input type="mail" name="email" />
        </div>

        <div className="form__unit">
          <label>Пароль</label>
          <input type="password" name="password" />
        </div>

        <div className="form__unit">
          <label>Подтвердите пароль</label>
          <input type="password" name="confirmPassword" />
        </div>

        <button type="submit">submit</button>
      </form>
    </>
  );
};
