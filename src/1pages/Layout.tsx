import { useNavigate } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

// import { http } from '../shared/api/services';

import { useAppSelector } from '../5shared/hooks/useAppSelector';

import '../0app/movie.css';
import { useDispatch } from 'react-redux';
import { setNameAsync, userActions } from '../4entities/movie/slice';
import { AppDispatch } from '../0app/store';
import MovieById from './MovieById';

function Layout() {
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => {
  //     return http.get('?i=tt3896198');
  //   },
  //   select: data => data.data,
  // });
  // localStorage.setItem('data', JSON.stringify(data));
  // const data = [JSON.parse(localStorage.getItem('data') || '')];
  const nav = useNavigate();

  const clickHandler = () => {
    nav('/login');
  };
  const dispatch = useDispatch<AppDispatch>();

  const dispatchHandler = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)).then(() =>
      dispatch(userActions.addLetters('qw'))
    );
  };

  const user = useAppSelector(state => state.user);
  return (
    <div>
      <div>User's name: {user.name ?? 'not found'}</div>
      <button onClick={clickHandler}>login</button>
      <button onClick={() => dispatch(setNameAsync('as'))}>
        Добавить букв thync
      </button>
      <button onClick={dispatchHandler}>Добавить букв</button>


      <MovieById />
    </div>
  );
}

export default Layout;
