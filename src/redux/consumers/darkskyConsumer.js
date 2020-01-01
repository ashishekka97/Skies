import {darkSkyAPI as API} from '../utils/networkManager';
import {darkSky as key} from '../../../configs/apiKeys';

export function fetchWeatherByLocation(lat = '37.8267', lon = '-122.4233') {
  return API.get(`/forecast/${key}/${lat},${lon}`, {}, {}).then(response => {
    return response.data;
  });
}
