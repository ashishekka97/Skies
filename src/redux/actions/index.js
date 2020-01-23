import {
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
  WEATHER_DATA_ERROR,
  REVERSE_GEOCODING_REQUEST,
  REVERSE_GEOCODING_SUCCESS,
  REVERSE_GEOCODING_ERROR,
  GEOCODING_REQUEST,
  GEOCODING_SUCCESS,
  GEOCODING_ERROR,
  AUTOCOMPLETE_REQUEST,
  AUTOCOMPLETE_SUCCESS,
  AUTOCOMPLETE_ERROR,
  AUTOCOMPLETE_RESET,
  SAVE_LOCATION_REQUEST,
  DELETE_LOCATION_REQUEST,
  SET_CURRENT_LOCATION,
  SET_PREFERENCE,
  SET_FIRST_LAUNCH,
} from './types';

export const getWeatherData = (lat, lon) => ({
  type: WEATHER_DATA_REQUEST,
  lat,
  lon,
});

export const weatherDataSuccess = data => ({
  type: WEATHER_DATA_SUCCESS,
  data,
});

export const weatherDataError = error => ({
  type: WEATHER_DATA_ERROR,
  error,
});

export const getReverseGeoCode = (lat, lon) => ({
  type: REVERSE_GEOCODING_REQUEST,
  lat,
  lon,
});

export const getReverseGeoCodeSuccess = reverseGeocode => ({
  type: REVERSE_GEOCODING_SUCCESS,
  reverseGeocode,
});

export const getReverseGeoCodeError = error => ({
  type: REVERSE_GEOCODING_ERROR,
  error,
});

export const getGeocode = label => ({
  type: GEOCODING_REQUEST,
  label,
});

export const getGeocodeSuccess = geocode => ({
  type: GEOCODING_SUCCESS,
  geocode,
});

export const getGeoCodeError = error => ({
  type: GEOCODING_ERROR,
  error,
});

export const getAutoComplete = query => ({
  type: AUTOCOMPLETE_REQUEST,
  query,
});

export const getAutoCompleteSuccess = suggestions => ({
  type: AUTOCOMPLETE_SUCCESS,
  suggestions,
});

export const getAutoCompleteError = error => ({
  type: AUTOCOMPLETE_ERROR,
  error,
});

export const resetAutoComplete = () => ({
  type: AUTOCOMPLETE_RESET,
});

export const saveLocation = location => ({
  type: SAVE_LOCATION_REQUEST,
  location,
});

export const deleteLocation = index => ({
  type: DELETE_LOCATION_REQUEST,
  index,
});

export const setCurrentLocation = location => ({
  type: SET_CURRENT_LOCATION,
  location,
});

export const setPreference = (preferenceId, optionIndex) => ({
  type: SET_PREFERENCE,
  preferenceId,
  optionIndex,
});

export const setFirstLaunch = () => ({
  type: SET_FIRST_LAUNCH,
})
