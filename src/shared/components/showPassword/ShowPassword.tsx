import { eyeImg } from 'assets';

import './style.scss';

type Props = {
  isHidden: 'hidden' | 'shown';
  callback: () => void;
};

export const ShowPassword = ({ callback, isHidden }: Props) => {
  return (
    <div className={`cross-eye ${isHidden}`}>
      <img onClick={callback} src={eyeImg} alt="eye" />
    </div>
  );
};
