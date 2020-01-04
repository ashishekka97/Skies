import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';

import weatherReducer from './weatherReducer';
import locationReducer from './locationReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
});

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['location'],
};

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
