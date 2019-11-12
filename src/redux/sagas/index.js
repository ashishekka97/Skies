import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  WEATHER_DATA_REQUEST,
  REVERSE_GEOCODING_REQUEST,
  AUTOCOMPLETE_REQUEST
} from '../actions/types';
import { fetchWeather } from './weatherSagas';
import { getReverseGeocode, getAutoComplete } from "./locationSagas";

export default function* rootSaga() {
  yield takeEvery(WEATHER_DATA_REQUEST, fetchWeather);
  yield takeEvery(REVERSE_GEOCODING_REQUEST, getReverseGeocode);
  yield takeLatest(AUTOCOMPLETE_REQUEST, getAutoComplete)
}