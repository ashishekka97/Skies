import { hereMapsAPI as API, autoCompleteAPI as API2, geocodeAPI as API3 } from '../utils/networkManager';
import { hereMaps as key } from '../../../configs/apiKeys';
import { hereMaps as id } from '../../../configs/appIDs';

export function fetchReverseGeocode(lat = '37.8267', lon = '-122.4233') {
  return API.get('/reversegeocode.json', {
    prox: `${lat},${lon}`,
    mode: 'retrieveAddress',
    maxresults: 1,
    gen: 9,
    app_id: id,
    app_code: key
  }, {})
  .then(response => {
    return response.data.Response.View[0].Result[0];
  });
}

export function fetchAutoComplete(query) {
  return API2.get('/suggest.json', {
    app_id: id,
    app_code: key,
    query: query,
    beginHighlight: '',
    endHighlight: ''
  }, {})
  .then(response => {
    return response.data.suggestions
  })
}

export function fetchGeocode(label = 'India, Nagpur') {
  return API3.get('/geocode.json', {
    searchtext: label,
    app_code: key,
    app_id: id
  }, {})
  .then(response => {
    return response.data.Response.View[0].Result[0].Location.DisplayPosition;
  })
}