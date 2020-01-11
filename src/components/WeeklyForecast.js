import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Weekly from './Weekly';
import WeeklyDetail from './WeeklyDetail';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconName from '.././utils/icons';

const WeeklyForecast = props => {
  const [activeSections, updateActiveSections] = useState([]);
  const {daily, settings} = props;
  const details = [];

  const getIcon = icon => {
    return <Icon name={iconName[icon]} style={styles.icons} />;
  };

  if (daily.data) {
    daily.data.map(data => {
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
          sunsetTime: data.sunsetTime,
        },
      });
    });
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
      },
    });
  }

  const renderHeader = (section, index, isActive, sections) => {
    return (
      <Weekly
        header={section.header}
        settings={settings}
        style={isActive ? styles.expanded : styles.collapsed}
      />
    );
  };

  const renderContent = section => {
    return <WeeklyDetail content={section.content} settings={settings} />;
  };

  return (
    <View>
      <Text style={styles.titleText}>This Week</Text>
      <View style={styles.summaryContainer}>
        <Text> {getIcon(daily.icon)} </Text>
        <Text style={styles.dot}> · </Text>
        <Text style={styles.summary}>{daily.summary}</Text>
      </View>
      <Accordion
        underlayColor="rgba(0, 0, 0, 0.0)"
        sections={details}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateActiveSections}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: '#fff',
  },
  titleText: {
    fontFamily: 'Dosis-Bold',
    fontSize: 20,
    color: '#fff',
  },
  summaryContainer: {
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icons: {
    fontSize: 24,
    width: '20%',
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal',
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
  expanded: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
  },
  collapsed: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

export default WeeklyForecast;
