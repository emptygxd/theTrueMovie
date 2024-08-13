import { useCallback, useEffect, useState } from 'react';

import { MoviesType } from 'entities';

import { http } from 'shared';

export const useLoadMore = (top: string) => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    setIsFetching(true);
  }, []);

  const scrollHandler = useCallback(
    (e: Event) => {
      const element = e.target as Document;

      if (
        element.documentElement.scrollHeight -
          (element.documentElement.scrollTop + window.innerHeight) <
          100 &&
        currentPage <= 5
      ) {
        setIsFetching(true);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    if (isFetching && currentPage <= 5 && !isBlocked) {
      setIsFetching(false);
      setIsBlocked(true);
      setTimeout(() => {}, 1000);
      http
        .get(
          `/movie?limit=50&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=${top}&page=${currentPage}`
        )
        .then((response) => {
          setMovies((prev) => [...prev, ...response.data.docs]);
          setCurrentPage((prev) => prev + 1);
        })
        .catch((error) => {
          console.error('Ошибка при запросе:', error);
        })
        .finally(() => {
          setIsBlocked(false);
        });
    }
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return {
    isFetching,
    movies,
  };
};
