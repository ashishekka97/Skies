import {
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
} from '../actions/types';

import {geocode, reverseGeocode} from '../initialStates/locationState';

const initialState = {
  isRequesting: false,
  geocode: geocode,
  reverseGeocode: reverseGeocode,
  suggestions: [],
  savedLocations: [],
  currentLocation: {},
  error: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVERSE_GEOCODING_REQUEST:
      return {
        ...state,
        isRequesting: true,
        error: null,
      };

    case REVERSE_GEOCODING_SUCCESS:
      return {
        ...state,
        reverseGeocode: action.reverseGeocode,
        isRequesting: false,
        error: null,
      };

    case REVERSE_GEOCODING_ERROR:
      return {
        ...state,
        error: action.error,
        isRequesting: true,
      };

    case GEOCODING_REQUEST:
      return {
        ...state,
        isRequesting: true,
        suggestions: [],
        error: null,
      };

    case GEOCODING_SUCCESS:
      return {
        ...state,
        geocode: action.geocode,
        isRequesting: false,
        error: null,
      };

    case GEOCODING_ERROR:
      return {
        ...state,
        error: action.error,
        isRequesting: true,
      };

    case AUTOCOMPLETE_REQUEST:
      return {
        ...state,
        suggestions: [],
        error: null,
      };

    case AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        suggestions: action.suggestions,
        error: null,
      };

    case AUTOCOMPLETE_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case AUTOCOMPLETE_RESET:
      return {
        ...state,
        suggestions: [],
        error: null,
      };

    case SAVE_LOCATION_REQUEST:
      return {
        ...state,
        savedLocations: [...state.savedLocations, action.location],
        error: null,
      };

    case DELETE_LOCATION_REQUEST:
      return {
        ...state,
        savedLocations: state.savedLocations.filter(
          item => item !== state.savedLocations[action.index],
        ),
      };

    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.location,
      };

    default:
      return state;
  }
};

export default locationReducer;
