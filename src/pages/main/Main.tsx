import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { MainList } from 'entities';

import { http, Loader, MoviesType, PAGE_TITLES } from 'shared';

import './style.scss';
const Main = () => {
  useEffect(() => {
    document.title = PAGE_TITLES.MAIN;
  }, []);

  const { isLoading, isError, data } = useQuery({
    queryKey: ['mainMovie'],
    queryFn: () => {
      return http.get(
        `/movie?page=1&isSeries=false&limit=25&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=top250`
      );
    },
    select: (data) => data.data.docs,
    refetchOnWindowFocus: false,
  });
  const movies: MoviesType[] = data;

  const {
    isLoading: isLoadingSeries,
    isError: isErrorSeries,
    data: seriesData,
  } = useQuery({
    queryKey: ['mainSeries'],
    queryFn: () => {
      return http.get(
        `/movie?page=1&isSeries=true&limit=25&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=series-top250`
      );
    },
    select: (data) => data.data.docs,
    refetchOnWindowFocus: false,
  });
  const series: MoviesType[] = seriesData;

  if (isLoading || isLoadingSeries) {
    return <Loader />;
  }

  if (isError || isErrorSeries) {
    return <section>ошибка</section>;
  }

  return (
    <section className="main">
      <div className="main__container">
        <MainList
          movies={movies}
          container="main-movie__container"
          path="Фильмы"
        />

        <MainList
          movies={series}
          container="main-series__container"
          path="Сериалы"
        />
      </div>
    </section>
  );
};

export default Main;
