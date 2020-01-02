import {
  darkSkyProvider,
  hereMapsProvider,
  autoCompleteProvider,
  geocodingProvider,
} from './networkProvider';

class NetworkManagerClass {
  constructor(networkProvider) {
    this.$http = networkProvider;
  }

  get(path, params = {}, reqHeaders = {}) {
    return this.$http.get(path, {params: params, headers: reqHeaders});
  }

  post(path, data, reqHeaders = {}) {
    return this.$http.post(path, data, {headers: reqHeaders});
  }

  delete(path, params) {
    return this.$http.delete(path, params);
  }

  put(path, params) {
    return this.$http.put(path, params);
  }

  all(path) {
    return this.$http.all(path);
  }
}

export const darkSkyAPI = new NetworkManagerClass(darkSkyProvider);
export const hereMapsAPI = new NetworkManagerClass(hereMapsProvider);
export const autoCompleteAPI = new NetworkManagerClass(autoCompleteProvider);
export const geocodeAPI = new NetworkManagerClass(geocodingProvider);
