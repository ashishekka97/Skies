import React from 'react';
import {
  View
} from 'react-native';
import Weatherimage from '../components/WeatherImage';
import BottomWrapper from '../components/BottomWrapper';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Weatherimage/>
        <BottomWrapper/>
      </View>
    )
  }
}

export default HomeScreen;