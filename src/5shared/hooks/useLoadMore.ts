import { useCallback, useEffect, useState } from 'react';

import { MoviesType } from 'pages';

import { http } from 'shared';

export const useLoadMore = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  // const [totalCount, setTotalCount] = useState(1);
  console.log(isFetching);

  useEffect(()=>{
    setIsFetching(true)
  },[])
  
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
    if (isFetching && currentPage <= 5) {
      console.log('fetching');
      setIsFetching(false)
      http
        .get(
          `/movie?page=${currentPage}&limit=50&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=top250`
        )
        .then((response) => {
         
          setMovies((prev) => [...prev, ...response.data.docs]);
          setCurrentPage((prev) => prev + 1);
        })
        // .finally(() => );
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
