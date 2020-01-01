import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getTime} from '../utils/time';

const Details = props => {
  const {currently, daily} = props;
  const details = [
    {
      name: 'Feels Like',
      icon: 'thermostat',
      data: currently.apparentTemperature,
    },
    {
      name: 'Temperature',
      icon: 'thermometer-lines',
      data: daily.data[0]
        ? daily.data[0].apparentTemperatureHigh
        : '-' + ' | ' + daily.data[0]
        ? daily.data[0].apparentTemperatureLow
        : '-',
    },
    {
      name: 'Wind',
      icon: 'weather-windy',
      data:
        currently.windSpeed +
        ' | ' +
        currently.windGust +
        ' | ' +
        currently.windBearing,
    },
    {
      name: 'Pressure',
      icon: 'gauge',
      data: currently.pressure,
    },
    {
      name: 'Humidity',
      icon: 'water',
      data: currently.humidity,
    },
    {
      name: 'Clouds',
      icon: 'cloud',
      data: currently.cloudCover,
    },
    {
      name: 'UV Index',
      icon: 'sunglasses',
      data: currently.uvIndex,
    },
    {
      name: 'Visibility',
      icon: 'weather-fog',
      data: currently.visibility,
    },
    {
      name: 'Sunrise',
      icon: 'weather-sunset-up',
      data: daily.data[0] ? getTime(daily.data[0].sunriseTime, 'h:m A') : '-',
    },
    {
      name: 'Sunset',
      icon: 'weather-sunset-down',
      data: daily.data[0] ? getTime(daily.data[0].sunsetTime, 'h:m A') : '-',
    },
  ];

  return (
    <View>
      <Text style={styles.titleText}>Details</Text>

      <View style={styles.properties}>
        {details.map((detail, idx) => {
          return (
            <View style={styles.property} key={idx}>
              <View style={styles.inProp}>
                <Icon name={detail.icon} style={styles.icons} />
                <View style={styles.propertyText}>
                  <Text style={styles.propertyTitle}>{detail.name}</Text>
                  <Text style={styles.propertyDetail}>{detail.data}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  properties: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  property: {
    width: '50%',
    height: 50,
    marginTop: 15,
  },
  inProp: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
  },
  icons: {
    fontSize: 24,
    width: '20%',
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal',
  },
  propertyText: {
    width: '80%',
  },
  propertyTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'notoserif',
  },
  propertyDetail: {
    color: '#fff',
    fontFamily: 'notoserif',
  },
});

export default Details;
