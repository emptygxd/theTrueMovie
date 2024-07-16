import { MovieType, MovieType2 } from '../../5shared/types';

export const mockMovie: MovieType[] = [
  {
    Actors: 'Chris Pratt, Zoe Saldana, Dave Bautista',
    Awards: 'Nominated for 1 Oscar. 15 wins & 60 nominations total',
    BoxOffice: '$389,813,101',
    Country: 'United States',
    DVD: 'N/A',
    Director: 'James Gunn',
    Genre: 'Action, Adventure, Comedy',
    Language: 'English',
    Metascore: '67',
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    Production: 'N/A',
    Rated: 'PG-13',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.6/10' },
      { Source: 'Rotten Tomatoes', Value: '85%' },
      { Source: 'Metacritic', Value: '67/100' },
    ],

    Released: '05 May 2017',
    Response: 'True',
    Runtime: '136 min',
    Title: 'Guardians of the Galaxy Vol. 2',
    Type: 'movie',
    Website: 'N/A',
    Writer: 'James Gunn, Dan Abnett, Andy Lanning',
    Year: '2017',
    imdbID: 'tt3896198',
    imdbRating: '7.6',
    imdbVotes: '762,391',
  },
];

export const mockMovie2: MovieType2 = {
  ageRating: 18,
  alternativeName: 'Fight Club',
  audience: [
    { count: 7300000, country: 'США' },
    { count: 1372834, country: 'Великобритания' },
    { count: 1038108, country: 'Германия' },
  ],
  backdrop: {
    previewUrl:
      'https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a00000187eb2008488548c47201a517c08b/x1000',
    url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a00000187eb2008488548c47201a517c08b/orig',
  },
  budget: {
    currency: '$',
    value: 63000000,
  },
  countries: [{ name: 'США' }, { name: 'Германия' }],
  createdAt: '2024-04-13T01:36:10.390Z',
  description:
    'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить, — саморазрушение.\n\nПроходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться невероятной популярностью.',
  enName: null,
  externalId: { kpHD: '44f2da0d8ace7b0ab1889e03a6a52d37' },
  fees: {
    russia: { value: 334590, currency: '$' },
    usa: { value: 37030102, currency: '$' },
    world: { value: 100853753, currency: '$' },
  },
  genres: [{ name: 'триллер' }, { name: 'драма' }, { name: 'криминал' }],
  id: 361,
  isSeries: false,
  lists: [
    'top250',
    'popular-films',
    'top500',
    'hearing_impairment',
    'hd-revise',
  ],
  movieLength: 139,
  name: 'Бойцовский клуб',
  names: [
    {
      name: 'Бойцовский клуб',
      language: 'RU',
      type: 'Russian title on kinopoisk',
    },
    {
      name: 'Fight Club',
      language: null,
      type: 'Original title on kinopoisk',
    },
  ],
  networks: null,
  persons: [
    {
      description: 'рассказчик',
      enName: 'Edward Norton',
      enProfession: 'actor',
      id: 25774,
      name: 'Эдвард Нортон',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
    },
    {
      description: 'йцу',
      enName: 'ed',
      enProfession: 'writer',
      id: 3134,
      name: 'писатель',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
      profession: 'писатель',
    },
    {
      description: 'йцу',
      enName: 'ed',
      enProfession: 'writer',
      id: 3134,
      name: 'писатель dva',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
      profession: 'писатель',
    },
    {
      description: 'рассказчик',
      enName: 'Edward Norton',
      enProfession: 'director',
      id: 25774,
      name: 'директор',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
    },
    {
      description: 'рассказчик',
      enName: 'Edward Norton',
      enProfession: 'producer',
      id: 25774,
      name: 'продюсер',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
    },

    {
      description: 'рассказчик',
      enName: 'Edward Norton',
      enProfession: 'operator',
      id: 25774,
      name: 'оператор',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
    },

    {
      description: 'рассказчик',
      enName: 'Edward Norton',
      enProfession: 'composer',
      id: 25774,
      name: 'композитор',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
    },

    {
      description: 'рассказчик',
      enName: 'Edward Norton',
      enProfession: 'designer',
      id: 25774,
      name: 'дизайнер',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
    },
    {
      description: 'рассказчик',
      enName: 'Edward Norton',
      enProfession: 'editor',
      id: 25774,
      name: 'эдитор',
      photo:
        'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25774.jpg',
    },
    // {
    //   id: 25584,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25584.jpg',
    //   name: 'Брэд Питт',
    //   enName: 'Brad Pitt',
    //   description: 'Tyler Durden',
    // },
    // {
    //   id: 25775,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25775.jpg',
    //   name: 'Хелена Бонем Картер',
    //   enName: 'Helena Bonham Carter',
    //   description: 'Marla Singer',
    // },
    // {
    //   id: 14127,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14127.jpg',
    //   name: 'Мит Лоаф',
    //   enName: 'Meat Loaf',
    //   description: 'Robert Paulsen (в титрах: Meat Loaf Aday)',
    // },
    // {
    //   id: 25776,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25776.jpg',
    //   name: 'Зэк Гренье',
    //   enName: 'Zach Grenier',
    //   description: 'Richard Chesler (Regional Manager)',
    // },
    // {
    //   id: 8151,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_8151.jpg',
    //   name: 'Холт Маккэллани',
    //   enName: 'Holt McCallany',
    //   description: 'The Mechanic',
    // },
    // {
    //   id: 1876,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1876.jpg',
    //   name: 'Джаред Лето',
    //   enName: 'Jared Leto',
    //   description: 'Angel Face',
    // },
    // {
    //   id: 7241,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7241.jpg',
    //   name: 'Эйон Бэйли',
    //   enName: 'Eion Bailey',
    //   description: 'Ricky',
    // },
    // {
    //   id: 8460,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_8460.jpg',
    //   name: 'Ричмонд Аркетт',
    //   enName: 'Richmond Arquette',
    //   description: 'Intern at Hospital',
    // },
    // {
    //   id: 25777,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25777.jpg',
    //   name: 'Дэвид Эндрюс',
    //   enName: 'David Andrews',
    //   description: 'Thomas at Remaining Men Together',
    // },
    // {
    //   id: 910705,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_910705.jpg',
    //   name: 'Даст Бразерс',
    //   enName: 'Dust Brothers',
    //   description: null,
    // },
    // {
    //   id: 608710,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_608710.jpg',
    //   name: 'Джон Кинг',
    //   enName: 'John King',
    //   description: null,
    // },
    // {
    //   id: 608711,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_608711.jpg',
    //   name: 'Майкл Симпсон',
    //   enName: 'Michael Simpson',
    //   description: null,
    // },
    // {
    //   id: 751902,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_751902.jpg',
    //   name: 'Крис Горак',
    //   enName: 'Chris Gorak',
    //   description: null,
    // },
    // {
    //   id: 66409,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_66409.jpg',
    //   name: 'Майкл Каплан',
    //   enName: 'Michael Kaplan',
    //   description: null,
    // },
    // {
    //   id: 545287,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_545287.jpg',
    //   name: 'Джей Харт',
    //   enName: 'Jay Hart',
    //   description: null,
    // },
    // {
    //   id: 2944,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2944.jpg',
    //   name: 'Дэвид Финчер',
    //   enName: 'David Fincher',
    //   description: null,
    // },
    // {
    //   id: 1986744,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1986744.jpg',
    //   name: 'Джеймс Хэйгуд',
    //   enName: 'James Haygood',
    //   description: null,
    // },
    // {
    //   id: 608712,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_608712.jpg',
    //   name: 'Джефф Кроненвет',
    //   enName: 'Jeff Cronenweth',
    //   description: null,
    // },
    // {
    //   id: 25810,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25810.jpg',
    //   name: 'Росс Грэйсон Белл',
    //   enName: 'Ross Grayson Bell',
    //   description: null,
    // },
    // {
    //   id: 25811,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25811.jpg',
    //   name: 'Сиан Чаффин',
    //   enName: 'Ceán Chaffin',
    //   description: null,
    // },
    // {
    //   id: 25812,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25812.jpg',
    //   name: 'Джон С. Дорси',
    //   enName: 'John S. Dorsey',
    //   description: null,
    // },
    // {
    //   id: 20910,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_20910.jpg',
    //   name: 'Арт Линсон',
    //   enName: 'Art Linson',
    //   description: null,
    // },
    // {
    //   id: 916982,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_916982.jpg',
    //   name: 'Евгений Дятлов',
    //   enName: null,
    //   description: null,
    // },
    // {
    //   id: 304211,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_304211.jpg',
    //   name: 'Петр Семак',
    //   enName: null,
    //   description: null,
    // },
    // {
    //   id: 37424,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_37424.jpg',
    //   name: 'Светлана Смирнова',
    //   enName: null,
    //   description: null,
    // },
    // {
    //   id: 37403,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_37403.jpg',
    //   name: 'Вадим Гущин',
    //   enName: null,
    //   description: null,
    // },
    // {
    //   id: 251264,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_251264.jpg',
    //   name: 'Евгений Иванов',
    //   enName: null,
    //   description: null,
    // },
    // {
    //   id: 25773,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25773.jpg',
    //   name: 'Джим Улс',
    //   enName: 'Jim Uhls',
    //   description: null,
    // },
    // {
    //   id: 25772,
    //   photo:
    //     'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25772.jpg',
    //   name: 'Чак Паланик',
    //   enName: 'Chuck Palahniuk',
    //   description: null,
    // },
  ],
  poster: {
    previewUrl:
      'https://image.openmoviedb.com/kinopoisk-images/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/x1000',
    url: 'https://image.openmoviedb.com/kinopoisk-images/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/orig',
  },
  premiere: {
    cinema: null,
    country: null,
    digital: null,
  },
  rating: {
    await: null,
    filmCritics: 7.4,
    imdb: 8.8,
    kp: 8.672,
    russianFilmCritics: 0,
  },
  ratingMpaa: 'r',
  seriesLength: null,
  shortDescription:
    'Страховой работник разрушает рутину своей благополучной жизни. Культовая драма по книге Чака Паланика',
  slogan: 'Интриги. Хаос. Мыло',
  status: null,
  ticketsOnSale: false,
  top10: null,
  top250: 5,
  totalSeriesLength: null,
  type: 'movie',
  typeNumber: 1,
  updatedAt: '2024-06-30T15:34:03.518Z',
  votes: {
    await: 0,
    filmCritics: 185,
    imdb: 2343486,
    kp: 1057401,
    russianFilmCritics: 2,
  },
  watchability: {
    items: [
      {
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig',
        },
        name: 'Okko',
        url: 'https://okko.tv/movie/fight-club?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed',
      },
    ],
  },
  year: 1999,
};
