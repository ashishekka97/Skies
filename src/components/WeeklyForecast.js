import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Weekly from './Weekly';
import WeeklyDetail from './WeeklyDetail';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconName from '.././utils/icons';

const WeeklyForecast = (props) => {
  const [activeSections, updateActiveSections] = useState([]);
  const { daily } = props;
  const details = [];

  const getIcon = (icon) => {
    return <Icon name={iconName[icon]} style={styles.icons}/>
  }

  if (daily.data) {
    (daily.data).map(data => {
      details.push({
        header: {
          time: data.time,
          icon: data.icon,
          temperatureMin: data.temperatureMin,
          temperatureMax: data.temperatureMax,
          precipProbability: data.precipProbability,
        },
        content: {
          summary: data.summary,
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
        precipProbability: 0.09,
      },
      content: {
        summary: 'Foggy',
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
        This Week
      </Text>
      <View style={styles.summaryContainer}>
        <Text> { getIcon(daily.icon) } </Text>
        <Text style={styles.dot}> · </Text>
        <Text style={styles.summary}>{ daily.summary }</Text>
      </View>
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
  summaryContainer: {
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  icons: {
    fontSize: 24,
    width: '20%',
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal'
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

export default WeeklyForecast;