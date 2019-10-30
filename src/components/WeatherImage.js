import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';

const WeatherImage = (props) => {
  return (
    <ImageBackground
     source={require('../assets/images/clear-sky-day.jpg')}
     style={styles.image}
    >
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2
  }
})

export default WeatherImage;