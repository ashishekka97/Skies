import {
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
  WEATHER_DATA_ERROR
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
})