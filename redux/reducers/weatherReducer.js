import {
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
  WEATHER_DATA_ERROR
} from '../actions/types';

const initialState = {
  isLoading: false,
  data: null,
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
  }
}

export default weatherReducer;