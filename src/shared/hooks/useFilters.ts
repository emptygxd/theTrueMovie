import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Filter, getFiltersInitialState, ROUTES, Value } from 'shared';

export const useFilters = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const initialType =
    searchParams.get('type') === 'Сериалы' ? 'Сериалы' : 'Фильмы';

  const initialGenre = getFiltersInitialState({
    genreToCheck: searchParams.get('genre') || '',
    countryToCheck: '',
  }).genreIS;

  const initialCountry = getFiltersInitialState({
    genreToCheck: '',
    countryToCheck: searchParams.get('country') || '',
  }).countryIS;

  const [selectedType, setSelectedType] = useState<Value>(initialType);

  const [selectedGenre, setSelectedGenre] = useState<Filter | null>(
    initialGenre,
  );
  const [selectedCountry, setSelectedCountry] = useState<Filter | null>(
    initialCountry,
  );

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams();
    params.append('type', selectedType);
    if (selectedGenre && selectedGenre.label !== 'Все жанры') {
      params.append('genre', selectedGenre.label);
    }
    if (selectedCountry && selectedCountry.label !== 'Все страны') {
      params.append('country', selectedCountry.label);
    }
    navigate(`${ROUTES.BASE}movies?${params.toString()}`, { replace: true });
  }, [selectedType, selectedGenre, selectedCountry, navigate]);

  const typeChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as Value;
      setSelectedType(value);
    },
    [],
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
