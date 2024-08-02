import eye from 'public/assets/eye.png';

import './style.scss';

type Props = {
  isHidden: 'hidden' | 'shown';
  callback: () => void;
};

export const ShowPassword = ({ callback, isHidden }: Props) => {
  return (
    <div className={`cross-eye ${isHidden}`}>
      <img onClick={callback} src={eye} alt="eye" />
    </div>
  );
};
