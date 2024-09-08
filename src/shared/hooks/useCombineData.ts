import { useEffect, useState } from 'react';

import { CastType, MoviesType } from 'shared';

type CombinedType = CastType | MoviesType;

export const useCombineData = <T extends CombinedType>(
  data1: T[],
  data2: T[]
) => {
  const [combinedMovies, setCombinedMovies] = useState<T[]>([]);

  useEffect(() => {
    const movieMap = new Map<number, T>();

    data1?.forEach((movie: T) => {
      movieMap.set(movie.id, movie);
    });

    data2?.forEach((movie: T) => {
      movieMap.set(movie.id, movie);
    });

    setCombinedMovies(Array.from(movieMap.values()));
  }, [data1, data2]);

  return {
    combinedMovies,
  };
};
