import { COUNTRIES, GENRES } from '../constants';

type Props = {
  genreToCheck: string;
  countryToCheck: string;
};

export const getFiltersInitialState = ({
  genreToCheck,
  countryToCheck,
}: Props) => {
  const isGenreExists = GENRES.some((genre) => genre.label === genreToCheck);
  const isCountryExists = COUNTRIES.some(
    (country) => country.label === countryToCheck,
  );

  let genreIS = {
    value: 'Все жанры',
    label: 'Все жанры',
  };

  let countryIS = {
    value: 'Все страны',
    label: 'Все страны',
  };

  if (isGenreExists) {
    genreIS = {
      value: genreToCheck,
      label: genreToCheck,
    };
  }

  if (isCountryExists) {
    countryIS = {
      value: countryToCheck,
      label: countryToCheck,
    };
  }

  return { genreIS, countryIS };
};
