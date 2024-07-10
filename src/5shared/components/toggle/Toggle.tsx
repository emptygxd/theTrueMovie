import { useSelector } from 'react-redux';

import { themeSelector } from '@shared/theme/selectors';

import './style.scss';

type Props = {
  callback: () => void;
};

export const Toggle = ({ callback }: Props) => {
  const theme = useSelector(themeSelector);
  return (
    <div className="toggle__container">
      <label htmlFor="checkbox" className="toggle">
        <input
          type="checkbox"
          onClick={callback}
          name="checkbox"
          id="checkbox"
          defaultChecked={theme === 'dark'}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
