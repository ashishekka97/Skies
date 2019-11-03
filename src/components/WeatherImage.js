import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text
} from 'react-native';
import background from '../utils/background';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherImage = (props) => {
  const { data } = props;

  const getBackground = (condition) => {
    return background[condition];
  }

  return (
    <ImageBackground
     source={ data.weather ? data.weather[0] ? getBackground(data.weather[0].icon) : require('../assets/images/clear-sky-day.jpg') : require('../assets/images/clear-sky-day.jpg')}
     style={styles.image}
     resizeMode='cover'
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.tempText}>
            {data.main.temp}
          </Text>
          <Icon name={'white-balance-sunny'} style={styles.icons}/>
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.subText}>
            {data.main.temp_min + " | " + data.main.temp_max}
          </Text>
          
          <Text style={styles.subText}>
            {data.weather[0].description}
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.5,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  innerContainer: {
    flexDirection: "row",
    width: Dimensions.get('window').width,
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 24,
    color: "#fff"
  },
  subText: {
    color: "#fff"
  },
  icons: {
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 32
  }
})

export default WeatherImage;