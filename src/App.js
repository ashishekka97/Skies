import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Navigation from './navigation';
import configureStore from './redux/store/configureStore';
import rootSaga from './redux/sagas';
import {Provider} from 'react-redux';

const store = configureStore();
store.runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.container}>
        <Navigation />
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
