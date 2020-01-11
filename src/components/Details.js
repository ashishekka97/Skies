import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getTime} from '../utils/time';
import {
  localizeTemp,
  localizeSpeed,
  localizePressure,
  localizeTime,
  localizeDistance,
} from '../utils/units';

const Details = props => {
  const {currently, daily, settings} = props;
  const details = [
    {
      name: 'Feels Like',
      icon: 'thermostat',
      data: localizeTemp(currently.apparentTemperature, settings[0]),
    },
    {
      name: 'Temperature',
      icon: 'thermometer-lines',
      data: daily.data[0]
        ? localizeTemp(daily.data[0].apparentTemperatureHigh, settings[0]) +
          ' · ' +
          localizeTemp(daily.data[0].apparentTemperatureLow, settings[0])
        : '-' + ' · ' + '-',
    },
    {
      name: 'Wind',
      icon: 'weather-windy',
      data:
        localizeSpeed(currently.windSpeed, settings[1]) +
        ' · ' +
        localizeSpeed(currently.windGust, settings[1]),
    },
    {
      name: 'Pressure',
      icon: 'gauge',
      data: localizePressure(currently.pressure, settings[2]),
    },
    {
      name: 'Humidity',
      icon: 'water',
      data: Math.round(currently.humidity * 100) + '%',
    },
    {
      name: 'Clouds',
      icon: 'cloud',
      data: Math.round(currently.cloudCover * 100) + '%',
    },
    {
      name: 'UV Index',
      icon: 'sunglasses',
      data: currently.uvIndex,
    },
    {
      name: 'Visibility',
      icon: 'weather-fog',
      data: localizeDistance(currently.visibility, settings[4]),
    },
    {
      name: 'Sunrise',
      icon: 'weather-sunset-up',
      data: daily.data[0]
        ? getTime(daily.data[0].sunriseTime, localizeTime(settings[3]))
        : '-',
    },
    {
      name: 'Sunset',
      icon: 'weather-sunset-down',
      data: daily.data[0]
        ? getTime(daily.data[0].sunsetTime, localizeTime(settings[3]))
        : '-',
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
    fontFamily: 'Dosis-Regular',
    color: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Dosis-Bold',
    color: '#fff',
  },
  properties: {
    fontFamily: 'Dosis-Regular',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  property: {
    fontFamily: 'Dosis-Regular',
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
    fontFamily: 'Dosis-Regular',
    width: '80%',
  },
  propertyTitle: {
    fontFamily: 'Dosis-Bold',
    color: '#fff',
  },
  propertyDetail: {
    fontFamily: 'Dosis-Regular',
    color: '#fff',
  },
});

export default Details;
