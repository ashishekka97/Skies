import NetworkManager from '../utils/networkManager';
import {apiKey as key} from '../../../configs/apiKey';

export function fetchWeatherByCityApi(city = 'Nagpur') {
  return NetworkManager.get(
    '/data/2.5/weather',
    {q: city, APPID: key},
    {},
  ).then(response => {
    return response.data;
  });
}
