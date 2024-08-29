import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { MoviesList } from 'widgets';

import { http, Loader, useCombineData, useLoadMore } from 'shared';

import './style.scss';

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

  const { isFetching, movies, reset } = useLoadMore({
    isMovie: false,
    dataTotal: data?.pages,
    query,
  });

  const { combinedMovies } = useCombineData(data?.docs, movies);

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
      {/* <div className="movies__container">
        {combinedMovies?.map((movie: MoviesType) => {
          return (
            <Link to={`${ROUTES.MOVIES}/${movie.id}`} key={movie.id}>
              <div className="movies__item">
                <MoviesItem movie={movie} />

                <MoviesItemDescription movie={movie} />
              </div>
            </Link>
          );
        })}
        {data?.pages === 0 && <ZeroResults />}
      </div>
      {isFetching && <SmallLoader />} */}
    </section>
  );
};
