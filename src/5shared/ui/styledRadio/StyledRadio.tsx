import { ChangeEvent } from 'react';
import './style.scss';

export type Value = 'Фильмы' | 'Сериалы';

type Props = {
  value: Value;
  selectedType: Value;
  typeChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const StyledRadio = ({
  value,
  selectedType,
  typeChangeHandler,
}: Props) => {
  return (
    <>
      <input
        type="radio"
        id={value}
        className="radio"
        name="type"
        value={value}
        checked={selectedType === value}
        onChange={typeChangeHandler}
      />
      <label htmlFor={value}>{value}</label>
    </>
  );
};
