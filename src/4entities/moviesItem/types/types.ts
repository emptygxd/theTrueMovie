type Genre = {
  name: string;
};

export type Poster = {
  previewUrl: string | null;
  url: string | null;
};

export type Rating = {
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

// const movie: Movie = {
//   alternativeName: 'Intouchables',
//   genres: [{ name: 'драма' }, { name: 'комедия' }],
//   id: 535341,
//   movieLength: 112,
//   name: '1+1',
//   poster: {
//     previewUrl:
//       'https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000',
//     url: 'https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig',
//   },
//   rating: {
//     await: null,
//     filmCritics: 6.8,
//     imdb: 8.5,
//     kp: 8.83,
//     russianFilmCritics: 100,
//   },
//   year: 2011,
// };
