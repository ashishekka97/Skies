import { hereMapsAPI as API } from '../utils/networkManager';
import { hereMaps as key } from '../../../config/apiKeys';
import { hereMaps as id } from '../../../config/appIDs';

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
    return response.data.Response.View[0].Result[0]
  });
}