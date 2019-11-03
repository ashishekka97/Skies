import {
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
  WEATHER_DATA_ERROR
} from '../actions/types';

const initialState = {
  isLoading: false,
  data: {
    base: "stations",
    clouds: {all: 100},
    cod: 200,
    coord: {lon: 2.35, lat: 48.86},
    dt: 1572766278,
    id: 2988507,
    main: {temp: 284.11, pressure: 980, humidity: 87, temp_min: 283.15, temp_max: 285.15},
    name: "Paris",
    sys: {type: 1, id: 6540, country: "FR", sunrise: 1572763196, sunset: 1572798498},
    timezone: 3600,
    visibility: 10000,
    weather: [
      {id: 500, main: "Rain", description: "light rain", icon: "10d"}
    ],
    wind: {speed: 5.7, deg: 140},
  },
  error: null
}

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case WEATHER_DATA_REQUEST: return {
      ...state,
      isLoading: true
    }

    case WEATHER_DATA_SUCCESS: return {
      ...state,
      data: action.data,
      isLoading: false
    }

    case WEATHER_DATA_ERROR: return {
      ...state,
      error: action.error,
      isLoading: false
    }

    default: return {
      ...state
    }
  }
}

export default weatherReducer;