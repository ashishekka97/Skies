import {
  hereMapsAPI as API,
  autoCompleteAPI as API2,
  geocodeAPI as API3,
} from '../utils/networkManager';
import {hereMaps as key} from '../../../configs/apiKeys';

export function fetchReverseGeocode(lat = '37.8267', lon = '-122.4233') {
  return API.get(
    '/reversegeocode.json',
    {
      prox: `${lat},${lon}`,
      mode: 'retrieveAddress',
      maxresults: 1,
      gen: 9,
      apiKey: key,
    },
    {},
  ).then(response => {
    return response.data.Response.View[0].Result[0];
  });
}

export function fetchAutoComplete(query) {
  return API2.get(
    '/suggest.json',
    {
      apiKey: key,
      query: query,
      beginHighlight: '',
      endHighlight: '',
    },
    {},
  ).then(response => {
    return response.data.suggestions;
  });
}

export function fetchGeocode(label = 'India, Nagpur') {
  return API3.get(
    '/geocode.json',
    {
      searchtext: label,
      apiKey: key,
    },
    {},
  ).then(response => {
    return response.data.Response.View[0].Result[0].Location.DisplayPosition;
  });
}
