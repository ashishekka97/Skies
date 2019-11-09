import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const requestLocationPermission = async(success, error) => {
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
      Geolocation.getCurrentPosition(
        success,
        error,
        { enableHighAccuracy: false, timeout: 5000, maximumAge: 3600000 } 
      );
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}