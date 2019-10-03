import NetworkManager from '../utils/networkManager';
import { apikey as key } from '../../config/apiKey';

export function fetchWeatherByCityApi(city = 'Nagpur') {
  return NetworkManager.get('/data/2.5/weather', {q: city, APPID: key}, {})
  .then(response => response.data.Search);
}