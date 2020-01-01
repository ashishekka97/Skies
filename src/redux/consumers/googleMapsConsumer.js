import Geocoder from 'react-native-geocoding';
import {googleMaps as key} from '../../../configs/apiKeys';

Geocoder.init(key); // use a valid API key

export function fetchReverseGeocode(lat = '37.8267', lon = '-122.4233') {
  console.log('Fetchig weather');
  return Geocoder.from(lat, lon).then(response => {
    console.log(response);
    return response.data;
  });
}
