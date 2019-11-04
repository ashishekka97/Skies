import { takeEvery } from 'redux-saga/effects';
import {
  WEATHER_DATA_REQUEST
} from '../actions/types';
import { fetchWeather } from './weatherSagas';

export default function* rootSaga() {
  yield takeEvery(WEATHER_DATA_REQUEST, fetchWeather);
}