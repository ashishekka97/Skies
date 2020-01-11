import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getTime} from '../utils/time';
import {localizeSpeed, localizePressure, localizeTime} from '../utils/units';

const WeeklyDetail = props => {
  const {content, settings} = props;
  const details = [
    {
      name: 'Wind',
      icon: 'weather-windy',
      data: localizeSpeed(content.windSpeed, settings[1]),
    },
    {
      name: 'Pressure',
      icon: 'gauge',
      data: localizePressure(content.pressure, settings[2]),
    },
    {
      name: 'Humidity',
      icon: 'water',
      data: Math.round(content.humidity * 100) + '%',
    },
    {
      name: 'Clouds',
      icon: 'cloud',
      data: Math.round(content.cloudCover * 100) + '%',
    },
    {
      name: 'Sunrise',
      icon: 'weather-sunset-up',
      data: getTime(content.sunriseTime, localizeTime(settings[3])),
    },
    {
      name: 'Sunset',
      icon: 'weather-sunset-down',
      data: getTime(content.sunsetTime, localizeTime(settings[3])),
    },
  ];
  return (
    <>
      <View style={styles.summaryContainer}>
        <Text>
          {' '}
          <Icon name={'information-variant'} style={styles.icons} />{' '}
        </Text>
        <Text style={styles.summary}>{content.summary}</Text>
      </View>

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
    </>
  );
};

const styles = StyleSheet.create({
  properties: {
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
    width: '80%',
  },
  propertyTitle: {
    color: '#fff',
    fontFamily: 'Dosis-Bold',
  },
  propertyDetail: {
    color: '#fff',
    fontFamily: 'Dosis-Regular',
  },
  summaryContainer: {
    paddingTop: 10,
    fontFamily: 'Dosis-Regular',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    fontFamily: 'Dosis-Regular',
    fontSize: 32,
    color: 'white',
  },
  summary: {
    fontFamily: 'Dosis-Regular',
    color: 'white',
    fontSize: 16,
  },
});

export default WeeklyDetail;
