type Genre = {
  name: string;
};

type Poster = {
  previewUrl: string | null;
  url: string | null;
};

type Rating = {
  await: number | null;
  filmCritics: number | null;
  imdb: number | null;
  kp: number | null;
  russianFilmCritics: number | null;
};

export type MoviesType = {
  alternativeName: string | null;
  genres: Genre[];
  id: number;
  movieLength: number | null;
  name: string | null;
  poster: Poster;
  rating: Rating;
  year: number;
};
