import { useEffect, useState } from 'react';

import { MoviesType } from 'entities';

export const useCombineData = (data1: MoviesType[], data2?: MoviesType[]) => {
  const [combinedMovies, setCombinedMovies] = useState<MoviesType[]>([]);

  useEffect(() => {
    const movieMap = new Map();

    data1?.forEach((movie: MoviesType) => {
      movieMap.set(movie.id, movie);
    });

    data2?.forEach((movie: MoviesType) => {
      movieMap.set(movie.id, movie);
    });

    setCombinedMovies(Array.from(movieMap.values()));
  }, [data1, data2]);

  return {
    combinedMovies,
  };
};
