import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import { fetchReverseGeocode, fetchAutoComplete } from '../consumers/hereMapsConsumer';

export function* getReverseGeocode(action) {
  try {
    const reverseGeocode = yield call(fetchReverseGeocode, action.lat, action.lon);
    yield put(actions.getReverseGeoCodeSuccess(reverseGeocode));
  } catch(error) {
    yield put(actions.getReverseGeoCodeError(error));
  }
}

export function* getAutoComplete(action) {
  try {
    const autoComplete = yield call(fetchAutoComplete, action.query);
    yield put(actions.getAutoCompleteSuccess(autoComplete))
  } catch (error) {
    yield put(actions.getAutoCompleteError(error));
  }
}