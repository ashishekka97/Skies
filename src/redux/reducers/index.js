import {combineReducers} from 'redux';

import weatherReducer from './weatherReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
});

export default rootReducer;
