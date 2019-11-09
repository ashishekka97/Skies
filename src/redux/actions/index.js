import {
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
  WEATHER_DATA_ERROR,

  SET_LOCATION_REQUEST,
  SET_LOCATION_SUCCESS,
  SET_LOCATION_ERROR,

  REVERSE_GEOCODING_REQUEST,
  REVERSE_GEOCODING_SUCCESS,
  REVERSE_GEOCODING_ERROR
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

export const setLocation = (position) => ({
  type: SET_LOCATION_REQUEST,
  position
})

export const setLocationSuccess = () => ({
  type: SET_LOCATION_SUCCESS
})

export const setLocationError = (error) => ({
  type: SET_LOCATION_ERROR,
  error
})

export const getLocation = () => ({
  type: SET_LOCATION_REQUEST,
})

export const getLocationSuccess = (position) => ({
  type: SET_LOCATION_SUCCESS,
  position
})

export const getLocationError = (error) => ({
  type: SET_LOCATION_ERROR,
  error
})

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