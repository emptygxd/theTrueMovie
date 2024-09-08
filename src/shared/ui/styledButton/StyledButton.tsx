import { ReactNode } from 'react';

import './style.scss';

type Props = {
  children: ReactNode;
  callback?: () => void;
};

export const StyledButton = ({ callback, children }: Props) => {
  return (
    <button className="button" onClick={callback}>
      {children}
    </button>
  );
};
