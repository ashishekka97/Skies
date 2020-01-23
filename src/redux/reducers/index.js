import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';

import weatherReducer from './weatherReducer';
import locationReducer from './locationReducer';
import preferenceReducer from './preferenceReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  settings: preferenceReducer,
});

const persistConfig = {
  key: 'primary',
  storage,
};

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
