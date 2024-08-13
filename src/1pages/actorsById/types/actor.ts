interface Place {
  value: string;
}

interface Fact {
  value: string;
}

interface Movie {
  id: number;
  name: string;
  alternativeName: string | null;
  rating: number | null;
  general: boolean;
  description?: string;
}

interface Spouse {
  name: string;
  marriedAt: string | null;
  divorcedAt: string | null;
}

interface Person {
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
}

const person = {
  age: 54,
  birthPlace: [{ value: 'Чикаго' }, { value: 'Иллинойс' }, { value: 'США' }],
  birthday: '1957-12-10T00:00:00.000Z',
  countAwards: null,
  createdAt: '2024-04-13T04:02:53.904Z',
  death: '2012-09-03T00:00:00.000Z',
  deathPlace: [],
  enName: 'Michael Clarke Duncan',
  facts: [
    {
      value:
        'Воспитывался только одной матерью, которая из опасения получения травмы запретила ему играть в американский футбол.',
    },
    {
      value:
        'В университете &laquo;Алкорн&raquo; штата Миссисипи Майкл Кларк Дункан изучал средства коммуникации, но из-за болезни матери был вынужден оставить учебу.',
    },
    {
      value:
        'Приходилось зарабатывать внушительной фигурой телохранителя — ему, среди прочих, довелось охранять <a href="/name/513/" class="all">Уилла Смита</a> и <a href="/name/25639/" class="all">Мартина Лоуренса</a>.',
    },
  ],
  growth: 196,
  id: 677,
  movies: [
    {
      alternativeName: 'The Challenger',
      description: 'Duane',
      enProfession: 'actor',
      general: false,
      id: 596428,
      name: 'Претендент',
      rating: 5.841,
    },
  ],
  name: 'Майкл Кларк Дункан',
  photo:
    'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/06bbbae0-18b0-4a93-af99-b0635ff03170/orig',
  profession: [],
  sex: 'Мужской',
  spouses: [],
  updatedAt: '2024-08-04T03:32:37.546Z',
};
