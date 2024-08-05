export const ROUTES = {
  MAIN: '/',
  MOVIES: '/movies',
  MOVIE_BY_ID: ':movieId',

  SERIES: '/series',
  SERIES_BY_ID: ':seriesId',

  COUNTRIES: '/countries',
  COUNTRY: ':country',

  GENRES: '/genres',
  GENRE: ':genre',

  CAST: 'cast',
  PERSONS: '/persons',
  PERSON: 'person',

  REGISTRATION: '/registration',
  LOGIN: '/login',
  LOGOUT: '/logout',

  USER: '/user',
  USER_MOVIES: '/user/movies',
  USER_SERIES: '/user/series',
  USER_PERSONS: '/user/persons',
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
  {
    id: 3,
    name: 'Люди',
    path: ROUTES.PERSONS,
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
