import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Weekly from './Weekly';
import WeeklyDetail from './WeeklyDetail';

const WeeklyForecast = (props) => {
  const [activeSections, updateActiveSections] = useState([]);
  const { daily } = props;
  const details = [];
  if (daily.data) {
    (daily.data).map(data => {
      details.push({
        header: {
          time: data.time,
          icon: data.icon,
          temperatureMin: data.temperatureMin,
          temperatureMax: data.temperatureMax,
        },
        content: {
          precipProbability: data.precipProbability,
          cloudCover: data.cloudCover,
          humidity: data.humidity,
          windSpeed: data.windSpeed,
          uvIndex: data.uvIndex,
          pressure: data.pressure,
          sunriseTime: data.sunriseTime,
          sunsetTime: data.sunsetTime
        }
      })
    })
  } else {
    details.push({
      header: {
        time: 1572964860,
        icon: 'clear-sky',
        temperatureMin: 52.17,
        temperatureMax: 52.17,
      },
      content: {
        precipProbability: 0.09,
        cloudCover: 0.14,
        humidity: 0.52,
        windSpeed: 4,
        uvIndex: 4,
        pressure: 1024,
        sunriseTime: 1572964860,
        sunsetTime: 1573002480,
      }
    })
  }

  renderHeader = section => {
    return (
      <Weekly header={section.header}/>
    );
  };

  renderContent = section => {
    return (
      <WeeklyDetail content={section.content}/>
    );
  };

  return (
    <View>
      <Text style={styles.titleText}>
        Weekly ForeCast
      </Text>
      <Accordion
        underlayColor='rgba(0, 0, 0, 0)'
        sections={details}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateActiveSections}
      />
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
})

export default WeeklyForecast;