type Place = {
  value: string;
};

type Fact = {
  value: string;
};

type Movie = {
  id: number;
  name: string | null;
  alternativeName: string | null;
  rating: number | null;
  general: boolean;
  description: string | null;
  enProfession: string | null;
};

type Spouse = {
  id: number;
  name: string | null;
  children: number;
  divorced: boolean;
  divorcedReason: string;
  relation: string;
};

export type PersonFull = {
  id: number;
  name: string;
  enName: string;
  sex: string;
  birthPlace: Place[];
  birthday: string;
  death: string | null;
  deathPlace: Place[];
  age: number | null;
  growth: number | null;
  countAwards: number | null;
  profession: string[];
  photo: string;
  spouses: Spouse[];
  movies: Movie[];
  facts: Fact[];
  createdAt: string;
  updatedAt: string;
};

export type PersonMovies = Movie[];
