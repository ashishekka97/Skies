import { takeEvery } from 'redux-saga/effects';
import {
  WEATHER_DATA_REQUEST,
  SET_LOCATION_REQUEST,
  GET_LOCATION_REQUEST,
  REVERSE_GEOCODING_REQUEST
} from '../actions/types';
import { fetchWeather } from './weatherSagas';
import { getLocation, setLocation, getReverseGeocode } from "./locationSagas";

export default function* rootSaga() {
  yield takeEvery(WEATHER_DATA_REQUEST, fetchWeather);

  // yield takeEvery(SET_LOCATION_REQUEST, setLocation);

  // yield takeEvery(GET_LOCATION_REQUEST, getLocation);

  yield takeEvery(REVERSE_GEOCODING_REQUEST, getReverseGeocode);
}