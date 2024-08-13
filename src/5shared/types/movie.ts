export type MovieType = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    },
    {
      Source: string;
      Value: string;
    },
    {
      Source: string;
      Value: string;
    },
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

type Audience = {
  count: number;
  country: string;
};

type Backdrop = {
  previewUrl: string;
  url: string;
};

type Budget = {
  currency: string;
  value: number;
};

export type Country = {
  name: string;
};

type ExternalId = {
  kpHD: string;
  imdb?: string;
  tmdb?: string;
};

type Fees = {
  russia?: {
    value: number;
    currency: string;
  };
  usa?: {
    value: number;
    currency: string;
  };
  world: {
    value: number;
    currency: string;
  };
};

export type Genre = {
  name: string;
};

type Name = {
  name: string;
  language: string | null;
  type: string;
};

export type Person = {
  description?: string;
  enName: string;
  enProfession?: string;
  id: number;
  name: string | null;
  photo: string;
  profession?: string;
};

type Poster = {
  previewUrl: string;
  url: string;
};

type Premiere = {
  cinema: string | null;
  country: string | null;
  digital: string | null;
};

type Rating = {
  await: number | null;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
};

type Votes = {
  await: number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
};

type Logo = {
  url: string;
};

type WatchabilityItem = {
  logo: Logo;
  name: string;
  url: string;
};

type Watchability = {
  items: WatchabilityItem[];
};

export type MovieType2 = {
  ageRating: number;
  alternativeName: string;
  audience: Audience[];
  backdrop: Backdrop;
  budget: Budget;
  countries: Country[];
  createdAt: string;
  description: string;
  enName: string | null;
  externalId: ExternalId;
  fees: Fees;
  genres: Genre[];
  id: number;
  isSeries: boolean;
  lists: string[];
  movieLength: number;
  name: string;
  names: Name[];
  networks: string | null;
  persons: Person[];
  poster: Poster;
  premiere: Premiere;
  rating: Rating;
  ratingMpaa: string;
  seriesLength: number | null;
  shortDescription: string;
  slogan: string;
  status: string | null;
  ticketsOnSale: boolean;
  top10: number | null;
  top250: number;
  totalSeriesLength: number | null;
  type: string;
  typeNumber: number;
  updatedAt: string;
  votes: Votes;
  watchability: Watchability;
  year: number;
};
