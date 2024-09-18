const BASE = '/theTrueMovie/';

export const ROUTES = {
  BASE,

  MAIN: '',
  MOVIES: `${BASE}movies`,
  MOVIE_BY_ID: ':movieId',

  SEARCH_RESULT: `${BASE}search`,
  SEARCH_QUERY: ':query',

  SERIES: `${BASE}movies?type=Сериалы`,

  COUNTRIES: `${BASE}countries`,
  COUNTRY: ':country',

  GENRES: `${BASE}genres`,
  GENRE: ':genre',

  CAST: 'cast',
  PERSONS: `${BASE}persons`,
  PERSON: ':personId',

  REGISTRATION: `${BASE}registration`,
  LOGIN: `${BASE}login`,
  LOGOUT: `${BASE}logout`,

  USER: `${BASE}user`,
  USER_MOVIES: 'user/movies',
  USER_SERIES: 'user/series',
  USER_PERSONS: 'user/persons',
};

export const MENU_ROUTES = [
  {
    id: 0,
    name: 'Главная',
    path: ROUTES.MAIN,
  },
  {
    id: 1,
    name: 'Фильмы',
    path: ROUTES.MOVIES,
  },
  {
    id: 2,
    name: 'Сериалы',
    path: ROUTES.SERIES,
  },
];

export const USER_MENU_ROUTES = [
  {
    id: 0,
    name: 'Профиль',
    path: ROUTES.USER,
  },
  {
    id: 1,
    name: 'Фильмы',
    path: ROUTES.USER_MOVIES,
  },
  {
    id: 2,
    name: 'Сериалы',
    path: ROUTES.USER_SERIES,
  },
  {
    id: 3,
    name: 'Люди',
    path: ROUTES.USER_PERSONS,
  },
  {
    id: 4,
    name: 'Выйти',
    path: ROUTES.LOGOUT,
  },
];
