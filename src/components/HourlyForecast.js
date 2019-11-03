import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import { VictoryArea, VictoryChart, VictoryScatter, VictoryAxis } from "victory-native";

const data = [
  { x: 1, y: 21 },
  { x: 2, y: 23 },
  { x: 3, y: 25 },
  { x: 4, y: 26 },
  { x: 5, y: 27 },
  { x: 6, y: 29 },
  { x: 7, y: 26 },
  { x: 8, y: 25 },
  { x: 9, y: 24 },
  { x: 10, y:22 }
];

const HourlyForecast = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Hourly ForeCast
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <VictoryChart
          height={150}
          width={600}
          padding={{ top: 50, bottom: 50, left: 10, right: 10 }}
          domain={{x: [1, 10], y: [20, 30]}}
        > 

          <VictoryAxis
            crossAxis
            style={{ axis: {stroke: "none"}, tickLabels: {fill: "white"} }}
          />

          <VictoryArea
            animate
            interpolation='natural'
            style={{
              data: { fill: "white", stroke: "white", fillOpacity: '0.3', }
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