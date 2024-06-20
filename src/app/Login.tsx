import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userActions } from '../entity/slice';

export const Login = () => {
  const nav = useNavigate();

  const clickHandler = () => {
    nav('/');
  };

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
      <p onClick={clickHandler}>Back</p>

      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>Surname</label>
          <input type="text" name="surname" />
        </div>

        <div>
          <label>Date</label>
          <input type="text" name="date" />
        </div>

        <div>
          <label>Position</label>
          <input type="text" name="position" />
        </div>

        <div>
          <label>Salary</label>
          <input type="text" name="salary" />
        </div>

        <button type="submit">submit</button>
      </form>
    </>
  );
};
