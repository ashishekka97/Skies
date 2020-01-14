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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <TouchableOpacity
      onPress={() => {
        getCurrentLocation(updateLogic, errorLogic);
      }}>
      <View style={styles.city}>
        <Text style={styles.resultText}>Current Location</Text>
        <Text style={styles.iconHolder}>
          <Icon name="crosshairs-gps" style={styles.icon} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  city: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 12,
  },

  resultText: {
    fontFamily: 'Dosis-Regular',
    color: 'white',
    fontSize: 16,
    padding: 10,
    width: '90%',
  },

  iconHolder: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
    padding: 5,
  },

  icon: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal',
  },
});

export default CurrentLocation;
