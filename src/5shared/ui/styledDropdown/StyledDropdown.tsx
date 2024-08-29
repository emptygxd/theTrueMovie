import Select from 'react-select';

import { Filter } from 'shared';

import './style.scss';

type Props = {
  options: Filter[];
  placeholder: string;
  selectedOption: Filter | null;
  changeHandler: (val: Filter | null) => void;
};

export const StyledDropdown = ({
  options,
  placeholder,
  selectedOption,
  changeHandler,
}: Props) => {
  return (
    <div className="dropdown__container">
      <label htmlFor="dropdown">{placeholder}</label>

      <Select
        id="dropdown"
        options={options}
        value={selectedOption}
        onChange={changeHandler}
        placeholder={`Все ${placeholder.toLowerCase()}`}
        classNamePrefix="react-select"
      />
    </div>
  );
};
