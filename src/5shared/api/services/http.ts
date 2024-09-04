import axios from 'axios';
// BXM4823 - HK74VD0 - NMMMZVX - KASR6X3
// const http = axios.create({
//   baseURL: 'http://www.omdbapi.com/',
// });
// http.defaults.params = {
//   apikey: '4287dec6'
// }
// http.defaults.headers.common['Content-Type'] = 'application/json';

// export default http;

export const http = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  headers: {
    Accept: 'application/json',
    // 'X-API-KEY': 'BXM4823-HK74VD0-NMMMZVX-KASR6X3',
    'X-API-KEY': 'VD325FM-SDSMGH5-QBE4PD1-2JNX3Y3',
  },
});
/**
 https://api.kinopoisk.dev/v1.4/movie?page=1&isSeries=true&limit=50&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=series-top250
https://api.kinopoisk.dev/v1.4/movie?page=1&isSeries=false&limit=50&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&notNullFields=top250&sortField=top250&sortType=1&lists=top250 
*/