import { PersonMovies } from 'shared';

export const getUniqueProfessions = (movies: PersonMovies): string[] => {
  const professionsSet = new Set<string>();

  movies.forEach((movie) => {
    if (movie.enProfession) {
      professionsSet.add(movie.enProfession);
    }
  });

  return Array.from(professionsSet);
};
