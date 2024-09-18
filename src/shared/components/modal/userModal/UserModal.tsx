import { Link } from 'react-router-dom';

import './style.scss';

type Props = {
  items: {
    id: number;
    name: string;
    path: string;
  }[];
};

export const UserModal = ({ items }: Props) => {
  return (
    <ul className="small-menu">
      {items.map((item) => (
        <li key={`${item.path}_${item.name}`} className="small-menu__item">
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
