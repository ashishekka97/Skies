import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Navigation from './navigation';
import configureStore from './redux/store/configureStore';
import rootSaga from './redux/sagas';
import Loader from './components/Loader';

const storage = configureStore();
storage.runSaga(rootSaga);
let persistor = storage.persistor(storage.store);

const App = () => {
  return (
    <Provider store={storage.store}>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.container}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
