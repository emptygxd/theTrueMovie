import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { MoviesList } from 'widgets';

import {
  http,
  Loader,
  MoviesType,
  PAGE_TITLES,
  useCombineData,
  useLoadMore,
} from 'shared';

export const SearchResult = () => {
  const { query } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['search', query],
    queryFn: () => {
      return http.get(`/movie/search?page=1&limit=50&query=${query}`);
    },
    select: (data) => {
      return {
        docs: data.data.docs,
        pages: data.data.pages,
      };
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    document.title = PAGE_TITLES.SEARCH;
  }, []);

  const { isFetching, movies, reset } = useLoadMore<MoviesType>({
    isMovie: false,
    isCast: false,
    dataTotal: data?.pages,
    query,
  });

  const { combinedMovies } = useCombineData<MoviesType>(data?.docs, movies);

  useEffect(() => {
    movies.splice(0, movies.length);
    reset();
  }, [query]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log('er');
  }
  return (
    <section className="movies">
      <MoviesList
        movies={combinedMovies}
        pages={data?.pages}
        isFetching={isFetching}
      />
    </section>
  );
};
