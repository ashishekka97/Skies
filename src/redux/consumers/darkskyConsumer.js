import NetworkManager from '../utils/networkManager';
import { darkSky as key } from '../../../config/apiKey';

export function fetchWeatherByLocation(lat = '37.8267', lon = '-122.4233') {
  return NetworkManager.get(`/forecast/${key}/${lat},${lon}`, {}, {})
  .then(response => {
    return response.data
  });
}