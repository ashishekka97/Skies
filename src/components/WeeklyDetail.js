import React from 'react';
import { 
  View,
  Text,
  StyleSheet
 } from "react-native";
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import { getTime } from "../utils/time";

const WeeklyDetail = (props) => {
  const { content } = props;
  const details = [ {
      name: 'Wind',
      icon: 'weather-windy',
      data: content.windSpeed,
    }, {
      name: 'Pressure',
      icon: 'gauge',
      data: content.pressure,
    }, {
      name: 'Humidity',
      icon: 'water',
      data: content.humidity
    }, {
      name: 'Clouds',
      icon: 'cloud',
      data: content.cloudCover
    }, {
      name: 'Sunrise',
      icon: 'weather-sunset-up',
      data: getTime(content.sunriseTime, 'h:m a')
    }, {
      name: 'Sunset',
      icon: 'weather-sunset-down',
      data: getTime(content.sunsetTime, 'h:m a')
    }
  ];
  return (
    <>
      <View style={styles.summaryContainer}>
        <Text> <Icon name={'information-variant'} style={styles.icons} /> </Text>
        <Text style={styles.summary}>{ content.summary }</Text>
      </View>

      <View style={styles.properties}>
        {
          details.map((detail, idx) => {
            return <View style={styles.property} key={idx}>
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
    </>
  )
}

const styles = StyleSheet.create({
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
  },
  summaryContainer: {
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  dot: {
    fontSize: 32,
    color: 'white',
  },
  summary: {
    color: 'white',
    fontSize: 16
  }
})

export default WeeklyDetail;