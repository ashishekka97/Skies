import {put, call} from 'redux-saga/effects';
import * as actions from '../actions';
import {fetchWeatherByLocation} from '../consumers/darkskyConsumer';

export function* fetchWeather(action) {
  try {
    const weatherData = yield call(
      fetchWeatherByLocation,
      action.lat,
      action.lon,
    );
    yield put(actions.weatherDataSuccess(weatherData));
  } catch (error) {
    yield put(actions.weatherDataError(error));
  }
}
