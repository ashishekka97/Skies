import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {getCurrentLocation} from '../utils/location';
// import { connect } from 'react-redux';
// import { getReverseGeoCode, getWeatherData } from '../redux/actions';

const CurrentLocation = props => {
  const {onSelect} = props;

  const updateLogic = position => {
    console.log('Here');
    onSelect({
      label: 'Current Location',
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      usingGPS: true,
    });
  };

  const showToast = (message, duration = 'SHORT', position = 'BOTTOM') => {
    ToastAndroid.show(message, ToastAndroid[duration], ToastAndroid[position]);
  };

  const errorLogic = error => {
    switch (error.code) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        showToast(error.message, 'SHORT', 'BOTTOM');
        break;
      default:
        showToast(error.message);
    }
  };

  return (
    <View style={styles.resultContainer}>
      <TouchableOpacity
        underlayColor="rgba(255, 255, 255, 0.3)"
        onPress={() => {
          getCurrentLocation(updateLogic, errorLogic);
        }}>
        <Text style={styles.resultText}>Current Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    width: '95%',
    margin: 10,
    marginTop: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
  },

  resultItem: {
    padding: 16,
  },

  resultText: {
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
});

export default CurrentLocation;
