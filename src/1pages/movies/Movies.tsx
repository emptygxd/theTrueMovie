import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { MoviesList } from 'widgets';

import { Filters } from 'features';

import { http, Loader, useCombineData, useLoadMore, useFilters } from 'shared';

import './style.scss';

const AllStuff = () => {
  const filters = useFilters();
  const selectedType = filters.selectedType;
  const selectedGenre = filters.selectedGenre;
  const selectedCountry = filters.selectedCountry;

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ['movies', selectedGenre, selectedCountry],
    queryFn: () => {
      const genreQuery = selectedGenre
        ? `&genres.name=${selectedGenre.label}`
        : '';
      const countryQuery = selectedCountry
        ? `&countries.name=${selectedCountry.label}`
        : '';

      return http.get(
        `/movie?page=1&isSeries=${selectedType === 'Сериалы'}&limit=50&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=${selectedType === 'Сериалы' ? 'series-top250' : 'top250'}${genreQuery}${countryQuery}`
      );
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
    isMovie: true,
    dataTotal: data?.pages,
    selectedOption: selectedType,
    selectedGenre,
    selectedCountry,
  });

  const { combinedMovies } = useCombineData(data?.docs, movies);

  useEffect(() => {
    movies.splice(0, movies.length);
    reset();
    refetch();
  }, [selectedType, selectedGenre, selectedCountry, refetch]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log('error');
  }

  return (
    <section className="movies">
      <Filters filters={filters} />
      <MoviesList
        movies={combinedMovies}
        pages={data?.pages}
        isFetching={isFetching}
      />
    </section>
  );
};

export default AllStuff;
