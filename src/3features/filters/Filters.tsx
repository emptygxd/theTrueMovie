import { ChangeEvent } from 'react';

import {
  COUNTRIES,
  Filter,
  GENRES,
  StyledDropdown,
  StyledRadio,
  Value,
} from 'shared';

import './style.scss';

type FiltersType = {
  selectedType: Value;
  selectedGenre: Filter | null;
  selectedCountry: Filter | null;
  typeChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  genreChangeHandler: (val: Filter | null) => void;
  countryChangeHandler: (val: Filter | null) => void;
};

type Props = {
  filters: FiltersType;
};

export const Filters = ({ filters }: Props) => {
  const {
    selectedType,
    selectedGenre,
    selectedCountry,
    typeChangeHandler,
    genreChangeHandler,
    countryChangeHandler,
  } = filters;
  return (
    <div className="movies__filters">
      <StyledRadio
        value="Фильмы"
        selectedType={selectedType}
        typeChangeHandler={typeChangeHandler}
      />
      <StyledRadio
        value="Сериалы"
        selectedType={selectedType}
        typeChangeHandler={typeChangeHandler}
      />

      <StyledDropdown
        options={GENRES}
        placeholder="Жанры"
        selectedOption={selectedGenre}
        changeHandler={genreChangeHandler}
      />
      <StyledDropdown
        options={COUNTRIES}
        placeholder="Страны"
        selectedOption={selectedCountry}
        changeHandler={countryChangeHandler}
      />
    </div>
  );
};
