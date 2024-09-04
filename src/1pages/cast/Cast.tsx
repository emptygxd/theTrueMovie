import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { CastList } from 'widgets';

import {
  BackButton,
  CastType,
  http,
  Loader,
  PAGE_TITLES,
  useCombineData,
  useLoadMore,
} from 'shared';

export const Cast = () => {
  const { movieId } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['movieCast', movieId],
    queryFn: () => {
      return http.get(`/person?page=1&limit=50&movies.id=${movieId}`);
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
    document.title = PAGE_TITLES.CAST;
  }, []);

  const { isFetching, movies } = useLoadMore<CastType>({
    isMovie: false,
    isCast: true,
    movieId: movieId,
    dataTotal: data?.pages,
  });

  const { combinedMovies } = useCombineData<CastType>(data?.docs, movies);
  localStorage.setItem('persons', JSON.stringify(combinedMovies));
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <section className="movies">
      <BackButton />

      <CastList
        actors={combinedMovies}
        pages={data?.pages}
        isFetching={isFetching}
      />
    </section>
  );
};
