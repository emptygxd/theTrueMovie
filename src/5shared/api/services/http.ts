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
    'X-API-KEY': 'BXM4823-HK74VD0-NMMMZVX-KASR6X3',
  },
});
