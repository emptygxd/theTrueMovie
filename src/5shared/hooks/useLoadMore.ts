import { useCallback, useEffect, useState, useRef } from 'react';

import { Filter, http, Value } from 'shared';

type Props = {
  isMovie: boolean;
  dataTotal: number;
  isCast?: boolean;
  selectedOption?: Value;
  selectedGenre?: Filter | null;
  selectedCountry?: Filter | null;
  query?: string;
  movieId?: string;
};

export const useLoadMore = <T>({
  isMovie,
  isCast,
  dataTotal,
  selectedOption,
  selectedGenre,
  selectedCountry,
  query,
  movieId,
}: Props) => {
  const [movies, setMovies] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [isFetching, setIsFetching] = useState(false);
  const isBlockedRef = useRef(false);

  let totalPages = dataTotal;
  let queryString;

  const loadMore = useCallback(() => {
    if (!isFetching && currentPage <= totalPages && !isBlockedRef.current) {
      setIsFetching(true);
      isBlockedRef.current = true;

      if (isMovie) {
        queryString = fetchMovies();
      } else if (isCast) {
        queryString = fetchCast();
      } else {
        queryString = fetchSearch();
      }
      http
        .get(queryString)
        .then((response) => {
          setCurrentPage((prev) => prev + 1);
          totalPages = response.data.pages;
          setMovies((prev) => [...prev, ...response.data.docs]);
        })
        .catch((error) => {
          console.error('Ошибка при запросе:', error);
        })
        .finally(() => {
          isBlockedRef.current = false;
          setIsFetching(false);
        });
    }
  }, [isFetching, currentPage, totalPages]);

  const fetchMovies = () => {
    const genreQuery =
      selectedGenre && selectedGenre.label !== 'Все жанры'
        ? `&genres.name=${selectedGenre.label}`
        : '';

    const countryQuery =
      selectedCountry && selectedCountry.label !== 'Все страны'
        ? `&countries.name=${selectedCountry.label}`
        : '';

    return `/movie?page=${currentPage}&isSeries=${selectedOption === 'Сериалы'}&limit=50&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=${selectedOption === 'Сериалы' ? 'series-top250' : 'top250'}${genreQuery}${countryQuery}`;
  };

  const fetchSearch = () => {
    return `/movie/search?page=${currentPage}&limit=50&query=${query}`;
  };

  const fetchCast = () => {
    return `/person?page=${currentPage}&limit=50&movies.id=${movieId}`;
  };

  const scrollHandler = useCallback(
    (e: Event) => {
      const element = e.target as Document;

      if (
        element.documentElement.scrollHeight -
          (element.documentElement.scrollTop + window.innerHeight) <
          100 &&
        currentPage <= totalPages
      ) {
        loadMore();
      }
    },
    [currentPage, loadMore, totalPages]
  );

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  const reset = () => {
    setCurrentPage(2);
  };

  return {
    isFetching,
    movies,
    reset,
  };
};
