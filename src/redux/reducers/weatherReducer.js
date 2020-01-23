import {
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
  WEATHER_DATA_ERROR,
} from '../actions/types';

const currently = {
  time: 1572794616,
  summary: 'Clear',
  icon: 'clear-day',
  nearestStormDistance: 275,
  nearestStormBearing: 143,
  precipIntensity: 0,
  precipProbability: 0,
  temperature: 59.72,
  apparentTemperature: 59.72,
  dewPoint: 33.02,
  humidity: 0.36,
  pressure: 1016.7,
  windSpeed: 3.79,
  windGust: 5.63,
  windBearing: 21,
  cloudCover: 0,
  uvIndex: 0,
  visibility: 7.45,
  ozone: 270.2,
};

const hourly = {
  summary: 'Clear throughout the day.',
  icon: 'clear-day',
  data: [
    {
      time: 1572793200,
      summary: 'Clear',
      icon: 'clear-day',
      precipIntensity: 0,
      precipProbability: 0,
      temperature: 58.7,
      apparentTemperature: 58.7,
      dewPoint: 32.76,
      humidity: 0.37,
      pressure: 1016.6,
      windSpeed: 3.93,
      windGust: 5.65,
      windBearing: 24,
      cloudCover: 0,
      uvIndex: 0,
      visibility: 6.864,
      ozone: 269.9,
    },
  ],
};

const daily = {
  summary: 'No precipitation throughout the week.',
  icon: 'clear-day',
  data: [
    {
      time: 1572764400,
      summary: 'Clear throughout the day.',
      icon: 'clear-day',
      sunriseTime: 1572791940,
      sunsetTime: 1572829800,
      moonPhase: 0.24,
      precipIntensity: 0.0005,
      precipIntensityMax: 0.002,
      precipIntensityMaxTime: 1572825420,
      precipProbability: 0.05,
      precipType: 'rain',
      temperatureHigh: 70.15,
      temperatureHighTime: 1572818160,
      temperatureLow: 50.84,
      temperatureLowTime: 1572875940,
      apparentTemperatureHigh: 69.65,
      apparentTemperatureHighTime: 1572818160,
      apparentTemperatureLow: 51.33,
      apparentTemperatureLowTime: 1572875940,
      dewPoint: 40.31,
      humidity: 0.48,
      pressure: 1015.8,
      windSpeed: 3.83,
      windGust: 8.02,
      windGustTime: 1572828180,
      windBearing: 299,
      cloudCover: 0.01,
      uvIndex: 4,
      uvIndexTime: 1572810840,
      visibility: 8.725,
      ozone: 269.5,
      temperatureMin: 54.74,
      temperatureMinTime: 1572854400,
      temperatureMax: 70.15,
      temperatureMaxTime: 1572818160,
      apparentTemperatureMin: 55.23,
      apparentTemperatureMinTime: 1572854400,
      apparentTemperatureMax: 69.65,
      apparentTemperatureMaxTime: 1572818160,
    },
  ],
};

const initialState = {
  isLoading: true,
  data: {
    currently: currently,
    hourly: hourly,
    daily: daily,
  },
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case WEATHER_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };

    case WEATHER_DATA_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default weatherReducer;
