import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
//import { getPosition, setPosition } from '../consumers/asyncStorageConsumer';
import { fetchReverseGeocode } from '../consumers/hereMapsConsumer';

// export function* getLocation() {
//   try {
//     const position = yield call(getPosition);
//     yield put(actions.getLocationSuccess(position));
//   } catch(error) {
//     yield put(actions.getLocationError(error));
//   }
// }

// export function* setLocation(position) {
//   try {
//     yield call(setPosition('position', position));
//     yield put(actions.setLocationSuccess());
//   } catch(error) {
//     yield put(actions.setLocationError(error));
//   }
// }

export function* getReverseGeocode(action) {
  try {
    const reverseGeocode = yield call(fetchReverseGeocode, action.lat, action.lon);
    yield put(actions.getReverseGeoCodeSuccess(reverseGeocode));
  } catch(error) {
    yield put(actions.getReverseGeoCodeError(error));
  }
}