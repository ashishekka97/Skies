import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import { fetchWeatherByCityApi } from '../consumers/owmApiConsumer';

export function* fetchWeatherByCity(action) {
  try {
    const weatherData = yield call(fetchWeatherByCityApi, action.city);
    //console.log(weatherData)
    yield put(actions.weatherDataSuccess(weatherData));
  } catch(error) {
    yield put(actions.weatherDataError(error));
  }
}