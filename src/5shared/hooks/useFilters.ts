import { ChangeEvent, useCallback, useState } from 'react';
import { Filter, Value } from 'shared';

export const useFilters = () => {
  const [selectedType, setSelectedType] = useState<Value>('Фильмы');
  const [selectedGenre, setSelectedGenre] = useState<Filter | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Filter | null>(null);

  const typeChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as Value;
      setSelectedType(value);
    },
    []
  );

  const genreChangeHandler = useCallback((newValue: Filter | null) => {
    if (newValue?.label === 'Все жанры') {
      setSelectedGenre(null);
    } else {
      setSelectedGenre(newValue);
    }
  }, []);

  const countryChangeHandler = useCallback((newValue: Filter | null) => {
    if (newValue?.label === 'Все страны') {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(newValue);
    }
  }, []);

  return {
    selectedType,
    selectedGenre,
    selectedCountry,
    typeChangeHandler,
    genreChangeHandler,
    countryChangeHandler,
  };
};
