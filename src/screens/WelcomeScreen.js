import React from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppIntroSlider from 'react-native-app-intro-slider';
import {getCurrentLocation} from '../utils/location';

const slides = [
  {
    key: 'data',
    title: 'Accurate Data',
    text:
      'Powered By DarkSky, one of the most accurate localized weather data source.',
    icon: 'checkbox-marked-circle-outline',
    color: '#375A9C',
  },
  {
    key: 'charts',
    title: 'Interactive Charts',
    text:
      'Get detailed visual representations of temperature, wind and precipitation.',
    icon: 'finance',
    color: '#443C51',
  },
  {
    key: 'started',
    title: 'Get Started',
    text: 'Provide your location and get started. Hope you enjoy Skies!',
    icon: 'map-search-outline',
    color: '#492D70',
  },
];

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  updateLogic = position => {
    this.props.setLocation({
      label: 'Current Location',
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      usingGPS: true,
    });
    this.props.firstLaunch();
    this.props.navigation.navigate('Home');
  };

  showToast = (message, duration = 'SHORT', position = 'BOTTOM') => {
    ToastAndroid.show(message, ToastAndroid[duration], ToastAndroid[position]);
  };

  errorLogic = error => {
    switch (error.code) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        this.showToast(error.message, 'SHORT', 'BOTTOM');
        break;
      default:
        this.showToast(error.message);
    }
  };

  _renderItem = props => {
    const {item} = props;
    return (
      <View
        style={[
          styles.mainContent,
          {
            backgroundColor: item.color,
          },
        ]}>
        <Icon style={styles.icon} name={item.icon} size={200} color="white" />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  _onDone = () => {
    getCurrentLocation(this.updateLogic, this.errorLogic);
  };
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        onDone={this._onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {backgroundColor: 'transparent'},
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Dosis-Regular',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'Dosis-Regular',
    marginBottom: 16,
  },
});

export default WelcomeScreen;
