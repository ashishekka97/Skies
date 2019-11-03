import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = (props) => {
  const { data } = props;
  console.log(props);
  const details = [ {
      name: 'Feels Like',
      icon: 'thermostat',
      data: data.main.temp
    }, {
      name: 'Temperature',
      icon: 'thermometer-lines',
      data: data.main.temp_max + " | " + data.main.temp_min,
    }, {
      name: 'Wind',
      icon: 'weather-windy',
      data: data.wind.speed + " | " + data.wind.deg,
    }, {
      name: 'Pressure',
      icon: 'gauge',
      data: data.main.pressure,
    }, {
      name: 'Humidity',
      icon: 'water',
      data: data.main.humidity
    }, {
      name: 'Clouds',
      icon: 'cloud',
      data: data.clouds.all
    }, {
      name: 'Sunrise',
      icon: 'weather-sunset-up',
      data: data.sys.sunrise,
      style: 'solid'
    }, {
      name: 'Sunset',
      icon: 'weather-sunset-down',
      data: data.sys.sunset,
      style: 'regular'
    }
  ];

  return (
    <View>
      <Text style={styles.titleText}>
        Details
      </Text>

      <View style={styles.properties}>

        {
          details.map(detail => {
            return <View style={styles.property}>
              <View style={styles.inProp}>
                <Icon name={detail.icon} style={styles.icons} />
                <View style={styles.propertyText}>
                  <Text style={styles.propertyTitle}>{detail.name}</Text>
                  <Text style={styles.propertyDetail}>{detail.data}</Text>
                </View>
              </View>
            </View>
          })
        }

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: '#fff'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  properties: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  property: {
    width: '50%',
    height: 50,
    marginTop: 15
  },
  inProp: {
    padding: 5,
    flex: 1,
    flexDirection: 'row'
  },
  icons: {
    fontSize: 24,
    width: '20%',
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal'
  },
  propertyText: {
    width: '80%'
  },
  propertyTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'notoserif',
  },
  propertyDetail: {
    color: '#fff',
    fontFamily: 'notoserif',
  }
})

export default Details;