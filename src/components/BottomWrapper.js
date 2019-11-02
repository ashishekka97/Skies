import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Details from './Details';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';

import color from '../utils/color';

const BottomWrapper = (props) => {
  const { data } = props;

  const getBackground = (condition) => {
    return color[condition];
  }

  return (
    <View style={
      {
        backgroundColor: data.weather ? data.weather[0] ? getBackground(data.weather[0].icon) : '#000000' : '#000000',
        height: '100%'
      }
    }>
      <View style={styles.content}>
        <Details/>
        <HourlyForecast/>
        <WeeklyForecast/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: 10,
    flex: 1,
    paddingVertical: 10
  }
});

export default BottomWrapper;