import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';
import background from '../utils/background';

const WeatherImage = (props) => {
  const { data } = props;

  const getBackground = (condition) => {
    return background[condition];
  }

  return (
    <ImageBackground
     source={ data.weather ? data.weather[0] ? getBackground(data.weather[0].icon) : require('../assets/images/clear-sky-day.jpg') : require('../assets/images/clear-sky-day.jpg')}
     style={styles.image}
    >
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.5
  }
})

export default WeatherImage;