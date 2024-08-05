import { ROUTES } from 'shared';
import './style.scss';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <section className="not-found__container">
      <h2>Что-то пошло не так =(</h2>
      <h1>404</h1>
      <h2>Страница не найдена</h2>

      <Link to={ROUTES.MAIN}>Вернуться на главную</Link>
    </section>
  );
};
