import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  return {
    store: createStore(rootReducer, {}, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run,
    persistor: persistStore,
  };
}
