import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import background from '../utils/image';
import {localizeTemp} from '../utils/units';
import HomeScreenOptions from '../components/HomeScreenOptions';

const WeatherImage = props => {
  const {data, reverseGeocode, navigation, settings} = props;

  const getBackground = condition => {
    return background[condition];
  };

  return (
    <ImageBackground
      source={
        data.currently
          ? getBackground(data.currently.icon)
          : require('../assets/weather/clear-day.jpg')
      }
      style={styles.image}
      resizeMode="cover">
      <HomeScreenOptions
        styles={styles.menu}
        navigation={navigation}
        condition={data.currently.icon}
      />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.tempText}>
            {localizeTemp(data.currently.apparentTemperature, settings[0])}
          </Text>
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.summary}>
            {reverseGeocode.Location.Address.City}
          </Text>
          <Text style={styles.dot}> · </Text>
          <Text style={styles.summary}>{data.currently.summary}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.5,
    flex: 1,
  },
  container: {
    flex: 4,
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  menu: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
    paddingLeft: 20,
    alignItems: 'center',
  },
  tempText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Dosis-SemiBold',
  },
  subText: {
    color: '#fff',
  },
  icons: {
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 32,
  },
  dot: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'Dosis-Regular',
  },
  summary: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Dosis-Regular',
  },
});

export default WeatherImage;
