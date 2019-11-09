import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { getTime } from '../utils/time';
import iconName from '../utils/icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SegmentedControlTab from "react-native-segmented-control-tab";

import TemperatureGraph from './TemperatureGraph';
import WindGraph from './WindGraph';
import PrecipitationGraph from './PrecipitationGraph';

const HourlyForecast = (props) => {
  const [activeIndex = 0, updateActiveIndex] = useState([]);
  const { hourly, daily } = props;
  const temperatureData = [];
  const precipitationData = [];
  const windData = [];

  const getIcon = (icon) => {
    return <Icon name={iconName[icon]} style={styles.icons}/>
  }

  const yDomainForTemperature = daily.data[0] ? [Math.round(daily.data[0].temperatureMin) - 5, Math.round(daily.data[0].temperatureMax) + 7] : null;
  const yDomainForPrecipitation = daily.data[0] ? [0, 100] : null;
  const yDomainForWind = daily.data[0] ? [0, 1] : null;

  {
    if (hourly.data) {
      const hours = hourly.data
      hours.some((hour, idx) => {
        if(idx > 23) return;
        temperatureData.push({
          x: getTime(hour.time, 'H'),
          y: Math.round(hour.apparentTemperature),
          icon: hour.icon,
          time: hour.time
        })

        precipitationData.push({
          x: getTime(hour.time, 'H'),
          y: hour.precipProbability*100,
          type: hour.percipType,
          time: hour.time
        })

        windData.push({
          x: getTime(hour.time, 'H'),
          y: Math.round(hour.windSpeed),
          bearing: hour.windBearing,
          time: hour.time
        })
      })
    }
  }

  const renderGraph = (index) => {
    if (index == 0) return <TemperatureGraph data={temperatureData} yDomain={yDomainForTemperature}/>
    else if (index == 1) return <WindGraph data={windData}/>
    else return <PrecipitationGraph data={precipitationData} yDomain={yDomainForPrecipitation}/>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Next 24 hours
      </Text>
      <View style={styles.summaryContainer}>
        <Text> { getIcon(hourly.icon) } </Text>
        <Text style={styles.dot}> · </Text>
        <Text style={styles.summary}>{ hourly.summary }</Text>
      </View>

      <SegmentedControlTab
        values={["Temperature", "Wind", "Precipitation"]}
        selectedIndex={activeIndex}
        onTabPress={updateActiveIndex}
        tabStyle={styles.tab}
        activeTabStyle={styles.activeTab}
        tabTextStyle={styles.tabText}
        activeTabTextStyle={styles.activeTabText}
        firstTabStyle={styles.firstTab}
        lastTabStyle={styles.lastTab}
      />

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {renderGraph(activeIndex)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
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
    flexDirection: 'row',
    paddingBottom: 10
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
  },
  tab: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  tabText: {
    color: '#fff'
  },
  activeTab: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: '#fff',
    borderBottomWidth: 2
  },
  firstTab: {
    borderBottomLeftRadius: 0
  },
  lastTab: {
    borderBottomRightRadius: 0
  }
})

export default HourlyForecast;