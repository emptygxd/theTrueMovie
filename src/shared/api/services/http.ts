import axios from 'axios';

const http = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});
http.defaults.params = {
  apikey: '4287dec6'
}
http.defaults.headers.common['Content-Type'] = 'application/json';

export default http;
