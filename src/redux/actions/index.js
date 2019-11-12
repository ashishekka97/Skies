import {
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
  WEATHER_DATA_ERROR,

  REVERSE_GEOCODING_REQUEST,
  REVERSE_GEOCODING_SUCCESS,
  REVERSE_GEOCODING_ERROR,

  AUTOCOMPLETE_REQUEST,
  AUTOCOMPLETE_SUCCESS,
  AUTOCOMPLETE_ERROR,
  AUTOCOMPLETE_RESET
} from './types';

export const getWeatherData = (lat, lon) => ({
  type: WEATHER_DATA_REQUEST,
  lat,
  lon
});

export const weatherDataSuccess = (data) => ({
  type: WEATHER_DATA_SUCCESS,
  data
});

export const weatherDataError = (error) => ({
  type: WEATHER_DATA_ERROR,
  error
});

export const getReverseGeoCode = (lat, lon) => ({
  type: REVERSE_GEOCODING_REQUEST,
  lat,
  lon
})

export const getReverseGeoCodeSuccess = (reverseGeocode) => ({
  type: REVERSE_GEOCODING_SUCCESS,
  reverseGeocode
})

export const getReverseGeoCodeError = (error) => ({
  type: REVERSE_GEOCODING_ERROR,
  error
})

export const getAutoComplete = (query) => ({
  type: AUTOCOMPLETE_REQUEST,
  query
})

export const getAutoCompleteSuccess = (suggestions) => ({
  type: AUTOCOMPLETE_SUCCESS,
  suggestions
})

export const getAutoCompleteError = (error) => ({
  type: AUTOCOMPLETE_ERROR,
  error
})

export const resetAutoComplete = () => ({
  type: AUTOCOMPLETE_RESET
})