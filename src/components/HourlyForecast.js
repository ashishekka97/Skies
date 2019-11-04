import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { getTime } from '../utils/time';

import { VictoryArea, VictoryChart, VictoryScatter, VictoryAxis } from "victory-native";

const HourlyForecast = (props) => {
  const { hourly, daily } = props;
  const data = [];
  const yDomain = daily.data[0] ? [Math.round(daily.data[0].temperatureMin) - 5, Math.round(daily.data[0].temperatureMax)] : null
  {
    if (hourly.data) {
      const hours = hourly.data
      hours.some((hour, idx) => {
        if(idx > 23) return;
        data.push({
          x: getTime(hour.time, 'H'),
          y: Math.round(hour.apparentTemperature)
        })
      })
    }
    console.log(data)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Hourly ForeCast
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          data.length < 2 ? null :
          <VictoryChart
            height={200}
            width={1600}
            padding={{ top: 50, bottom: 50, left: 10, right: 10 }}
            domain={ yDomain ? { 'y': yDomain } : null }
          > 

            <VictoryAxis
              crossAxis
              style={{ axis: {stroke: "none"}, tickLabels: {fill: "white"} }}
            />

            <VictoryArea
              animate
              interpolation='natural'
              style={{
                data: { fill: "black", stroke: "white", fillOpacity: '0.1', }
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
})

export default HourlyForecast;