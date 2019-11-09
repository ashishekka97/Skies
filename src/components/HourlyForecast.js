import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { getTime } from '../utils/time';
import iconName from '../utils/icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { VictoryArea, VictoryChart, VictoryScatter, VictoryAxis } from "victory-native";
import DataPoint from './DataPoint';

const HourlyForecast = (props) => {
  const { hourly, daily } = props;
  const data = [];

  const getIcon = (icon) => {
    return <Icon name={iconName[icon]} style={styles.icons}/>
  }

  const yDomain = daily.data[0] ? [Math.round(daily.data[0].temperatureMin) - 5, Math.round(daily.data[0].temperatureMax) + 7] : null
  {
    if (hourly.data) {
      const hours = hourly.data
      hours.some((hour, idx) => {
        if(idx > 23) return;
        data.push({
          x: getTime(hour.time, 'H'),
          y: Math.round(hour.apparentTemperature),
          icon: hour.icon,
          time: hour.time
        })
      })
    }
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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          data.length < 2 ? null :
          <VictoryChart
            height={200}
            width={1600}
            padding={{ top: 50, bottom: 50, left: 12, right: 12 }}
            domain={ yDomain ? { 'y': yDomain } : null }
          > 

            <VictoryAxis
              crossAxis
              style={{ axis: {stroke: "none"}, tickLabels: {fill: "white"} }}
              // tickFormat={(t) => getTime(t, 'h')}
            />

            <VictoryArea
              animate
              interpolation='catmullRom'
              style={{
                data: { fill: "black", stroke: 'rgba(256, 256, 256, 0.3)', strokeOpaciy: '0.1', fillOpacity: '0.0', }
              }}
              data={data}
            />

            <VictoryScatter
              data={data}
              labels={({ datum }) => datum.y}
              size={5}
              style={{
                parent: {
                  border: "1px solid #fff"
                },
                data: { fill: "white" },
                labels: { fontSize: 15, fill: "#fff", padding: 15 }
              }}
              dataComponent={<DataPoint/>}
            />
          </VictoryChart>
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
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

export default HourlyForecast;