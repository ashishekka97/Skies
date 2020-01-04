import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const requestLocationPermission = async (success, error) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Skies Location Permission',
        message:
          'Skies needs access to your location ' +
          'for updating weather information',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      getCurrentLocation(success, error);
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const getCurrentLocation = async (success, error) => {
  const hasLocationPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  );
  if (hasLocationPermission) {
    console.log(hasLocationPermission);
    Geolocation.getCurrentPosition(success, error);
  } else {
    console.log(hasLocationPermission);
    requestLocationPermission(success, error);
  }
};
